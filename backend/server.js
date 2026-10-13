
const dns = require("node:dns");

// DNS workaround for the MongoDB Atlas SRV lookup issue
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("node:path");
const cors = require("cors");

const {
  clerkMiddleware,
  getAuth,
  clerkClient,
} = require("@clerk/express");

const Customer = require("./models/Customer");

// ======================================
// LOAD ENVIRONMENT VARIABLES
// ======================================

dotenv.config({
  path: path.join(__dirname, ".env"),
});

const PORT = process.env.PORT || 5000;
const ADMIN_EMAIL = "shafkatamanullah@gmail.com";

if (!process.env.MONGO_URI) {
  console.error(
    "ERROR: MONGO_URI is missing from backend/.env"
  );
  process.exit(1);
}

// ======================================
// CREATE EXPRESS APP
// ======================================

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// ======================================
// TEST ROUTE
// ======================================

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Mushad Construction backend is running successfully!",
  });
});

// ======================================
// GET LOGGED-IN CUSTOMER PROFILE
// ======================================

app.get("/api/customers", async (req, res) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized. Please login.",
    });
  }

  try {
    const customers = await Customer.find({
      clerkUserId: userId,
    });

    return res.status(200).json(customers);
  } catch (error) {
    console.error("Customer fetch error:", error);

    return res.status(500).json({
      message: "Failed to fetch customer profile.",
    });
  }
});

// ======================================
// CREATE OR UPDATE CUSTOMER PROFILE
// ======================================

app.post("/api/customers", async (req, res) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized. Please login.",
    });
  }

  try {
    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      pincode,
    } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({
        message: "A valid email is required.",
      });
    }

    let customer = await Customer.findOne({
      clerkUserId: userId,
    });

    const profileData = {
      name: name || "",
      email: email.trim(),
      phone: phone || "",
      address: address || "",
      city: city || "",
      state: state || "",
      pincode: pincode || "",
    };

    if (customer) {
      Object.assign(customer, profileData);
      await customer.save();

      return res.status(200).json(customer);
    }

    customer = new Customer({
      clerkUserId: userId,
      ...profileData,
    });

    await customer.save();

    return res.status(201).json(customer);
  } catch (error) {
    console.error("Customer save error:", error);

    return res.status(500).json({
      message: "Failed to save customer profile.",
    });
  }
});

// ======================================
// ADMIN: GET ALL CUSTOMERS
// ======================================

app.get("/api/admin/customers", async (req, res) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized. Please login.",
    });
  }

  try {
    const clerkUser = await clerkClient.users.getUser(userId);

    const primaryEmail =
      clerkUser.primaryEmailAddress?.emailAddress;

    if (
      !primaryEmail ||
      primaryEmail.toLowerCase() !== ADMIN_EMAIL.toLowerCase()
    ) {
      return res.status(403).json({
        message: "Access denied. Administrator only.",
      });
    }

    const customers = await Customer.find().sort({
      createdAt: -1,
    });

    return res.status(200).json(customers);
  } catch (error) {
    console.error("Admin customer fetch error:", error);

    return res.status(500).json({
      message: "Failed to fetch customers.",
    });
  }
});

// ======================================
// ADMIN: DELETE CUSTOMER
// ======================================

app.delete(
  "/api/admin/customers/:id",
  async (req, res) => {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized. Please login.",
      });
    }

    try {
      const clerkUser = await clerkClient.users.getUser(userId);

      const primaryEmail =
        clerkUser.primaryEmailAddress?.emailAddress;

      if (
        !primaryEmail ||
        primaryEmail.toLowerCase() !== ADMIN_EMAIL.toLowerCase()
      ) {
        return res.status(403).json({
          message: "Access denied. Administrator only.",
        });
      }

      if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({
          message: "Invalid customer ID.",
        });
      }

      const customer = await Customer.findByIdAndDelete(
        req.params.id
      );

      if (!customer) {
        return res.status(404).json({
          message: "Customer not found.",
        });
      }

      return res.status(200).json({
        message: "Customer deleted successfully.",
      });
    } catch (error) {
      console.error("Admin customer delete error:", error);

      return res.status(500).json({
        message: "Failed to delete customer.",
      });
    }
  }
);

// ======================================
// CONNECT TO MONGODB AND START SERVER
// ======================================

async function startServer() {
  try {
    console.log(
      "MongoDB URI loaded:",
      Boolean(process.env.MONGO_URI)
    );

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 15000,
    });

    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(
        `Backend server running on http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error);
    console.error(
      "Check your MongoDB URI, Atlas network access, and DNS/network settings."
    );
  }
}

startServer();
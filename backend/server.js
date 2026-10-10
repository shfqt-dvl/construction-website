const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const {
  clerkMiddleware,
  getAuth,
  clerkClient,
} = require("@clerk/express");

const Customer = require("./models/Customer");

// ================================
// LOAD ENVIRONMENT VARIABLES
// ================================

dotenv.config({
  path: path.join(__dirname, ".env"),
});

console.log(
  "MongoDB URI loaded:",
  !!process.env.MONGO_URI
);

// ================================
// APP
// ================================

const app = express();
const PORT = 5000;

// ================================
// ADMIN
// ================================

const ADMIN_EMAIL = "shafkatamanullah@gmail.com";

// ================================
// MIDDLEWARE
// ================================

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// ================================
// TEST ROUTE
// ================================

app.get("/", (req, res) => {
  res.json({
    message:
      "Mushad Construction backend is running successfully!",
  });
});

// ================================
// GET LOGGED-IN CUSTOMER
// ================================

app.get("/api/customers", async (req, res) => {
  const { userId } = getAuth(req);

  // Check Clerk login
  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized. Please login.",
    });
  }

  try {
    // Only return the logged-in user's profile
    const customers = await Customer.find({
      clerkUserId: userId,
    });

    res.json(customers);
  } catch (error) {
    console.error(
      "Customer fetch error:",
      error
    );

    res.status(500).json({
      message: "Failed to fetch customers",
    });
  }
});

// ================================
// CREATE / UPDATE CUSTOMER
// ================================

app.post("/api/customers", async (req, res) => {
  const { userId } = getAuth(req);

  // Check Clerk login
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

    // Email required
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    // ================================
    // FIND EXISTING CUSTOMER
    // ================================

    const existingCustomer =
      await Customer.findOne({
        clerkUserId: userId,
      });

    // ================================
    // UPDATE EXISTING CUSTOMER
    // ================================

    if (existingCustomer) {
      existingCustomer.name = name || "";
      existingCustomer.email = email;
      existingCustomer.phone = phone || "";
      existingCustomer.address = address || "";
      existingCustomer.city = city || "";
      existingCustomer.state = state || "";
      existingCustomer.pincode = pincode || "";

      const updatedCustomer =
        await existingCustomer.save();

      return res.status(200).json(
        updatedCustomer
      );
    }

    // ================================
    // CREATE NEW CUSTOMER
    // ================================

    const customer = new Customer({
      clerkUserId: userId,
      name: name || "",
      email,
      phone: phone || "",
      address: address || "",
      city: city || "",
      state: state || "",
      pincode: pincode || "",
    });

    const savedCustomer =
      await customer.save();

    return res.status(201).json(
      savedCustomer
    );
  } catch (error) {
    console.error(
      "Customer save error:",
      error
    );

    return res.status(500).json({
      message: "Failed to save customer",
    });
  }
});

// ================================
// ADMIN - GET ALL CUSTOMERS
// ================================

app.get(
  "/api/admin/customers",
  async (req, res) => {
    const { userId } = getAuth(req);

    // ================================
    // CHECK CLERK LOGIN
    // ================================

    if (!userId) {
      return res.status(401).json({
        message:
          "Unauthorized. Please login.",
      });
    }

    try {
      // ================================
      // GET CLERK USER INFORMATION
      // ================================

      const clerkUser =
        await clerkClient.users.getUser(userId);

      // ================================
      // GET PRIMARY EMAIL
      // ================================

      const primaryEmail =
        clerkUser.primaryEmailAddress
          ?.emailAddress;

      // ================================
      // ADMIN EMAIL CHECK
      // ================================

      if (
        primaryEmail?.toLowerCase() !==
        ADMIN_EMAIL.toLowerCase()
      ) {
        return res.status(403).json({
          message:
            "Access denied. Administrator only.",
        });
      }

      // ================================
      // GET ALL CUSTOMERS
      // ================================

      const customers =
        await Customer.find()
          .sort({ createdAt: -1 });

      return res.status(200).json(
        customers
      );
    } catch (error) {
      console.error(
        "Admin customer fetch error:",
        error
      );

      return res.status(500).json({
        message:
          "Failed to fetch customers",
      });
    }
  }
);

// ==========================================
// ADMIN - DELETE CUSTOMER
// ==========================================

app.delete(
  "/api/admin/customers/:id",
  async (req, res) => {
    const { userId } = getAuth(req);

    // Check Clerk login
    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized. Please login.",
      });
    }

    try {
      // Get logged-in Clerk user
      const clerkUser =
        await clerkClient.users.getUser(userId);

      // Get admin email
      const primaryEmail =
        clerkUser.primaryEmailAddress
          ?.emailAddress;

      // Check admin
      if (
        primaryEmail?.toLowerCase() !==
        ADMIN_EMAIL.toLowerCase()
      ) {
        return res.status(403).json({
          message:
            "Access denied. Administrator only.",
        });
      }

      // Find customer
      const customer =
        await Customer.findById(
          req.params.id
        );

      if (!customer) {
        return res.status(404).json({
          message:
            "Customer not found.",
        });
      }

      // Delete customer
      await Customer.findByIdAndDelete(
        req.params.id
      );

      return res.status(200).json({
        message:
          "Customer deleted successfully.",
      });
    } catch (error) {
      console.error(
        "Admin customer delete error:",
        error
      );

      return res.status(500).json({
        message:
          "Failed to delete customer.",
      });
    }
  }
);

// ================================
// MONGODB CONNECTION
// ================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(
      "MongoDB connected successfully!"
    );

    app.listen(PORT, () => {
      console.log(
        `Backend server running on http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(
      "MongoDB connection failed:"
    );

    console.error(error.message);
  });
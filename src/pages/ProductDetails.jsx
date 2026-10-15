
import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find(
    (item) =>
      item.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  // Handle invalid product URLs
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for is unavailable.</p>
      </div>
    );
  }

  // Correct WhatsApp number: 9162512232
  const whatsappMessage = `Hello Mushad Construction & Hardware Store,

I am interested in this product:

Product: ${product.name}
Brand: ${product.brand}

Please share the latest price and availability.`;

  const whatsappLink = `https://wa.me/91${"9162512232".replace(
    /^91/,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="product-details">
      <div className="product-details-container">

        {/* Product Image */}
        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* Product Information */}
        <div className="product-details-info">

          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <p className="product-brand">
            <strong>Brand:</strong> {product.brand}
          </p>

          <div className="product-price">
            ₹{product.price}
            <span> / {product.unit}</span>
          </div>

          <div className="product-stock">
            ✅ {product.stock}
          </div>

          <p className="product-description">
            {product.description}
          </p>

          {/* WhatsApp Enquiry */}
          <div className="product-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-order-btn"
            >
              💬 Enquire on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

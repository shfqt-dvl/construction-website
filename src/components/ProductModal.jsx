import "./ProductModal.css";

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>{product.name}</h2>

        <p>{product.items}</p>

        <p>
          Contact us for pricing, bulk orders, and availability.
        </p>

        <a href="#contact" className="modal-contact-btn">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default ProductModal;
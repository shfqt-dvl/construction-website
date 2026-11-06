
import { useEffect, useState } from "react";
import { MessageSquareText, X } from "lucide-react";
import Quote from "./Quote";
import "./QuotePopup.css";

function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3500);

    const openQuote = () => setIsOpen(true);

    window.addEventListener("open-quote", openQuote);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-quote", openQuote);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
  className="quote-floating-btn"
  onClick={() => setIsOpen(true)}
  aria-label="Get a quote"
>
  <MessageSquareText size={20} />
</button>

      {isOpen && (
        <div
          className="quote-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className="quote-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Get a quote"
          >
            <button
              type="button"
              className="quote-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close popup"
            >
              <X size={22} />
            </button>

            <Quote isPopup onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default QuotePopup;


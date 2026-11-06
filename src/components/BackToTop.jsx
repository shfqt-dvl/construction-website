import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./BackToTop.css";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!showButton}
      tabIndex={showButton ? 0 : -1}
    >
      <ArrowUp size={21} strokeWidth={2.5} />
    </button>
  );
}

export default BackToTop;
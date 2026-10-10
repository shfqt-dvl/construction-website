import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: "fixed",
        top: "90px",
        left: "25px",
        zIndex: 1000,

        display: "flex",
        alignItems: "center",
        gap: "8px",

        padding: "10px 18px",
        background: "#f3f4f6",
        color: "#222",

        border: "none",
        borderRadius: "8px",

        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",

        boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
      }}
    >
      ← Back
    </button>
  );
}

export default BackButton;
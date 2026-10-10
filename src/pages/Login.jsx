import { SignIn } from "@clerk/react";

function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        background: "#f8fafc",
      }}
    >
      <SignIn
        fallbackRedirectUrl="/account"
      />
    </div>
  );
}

export default Login; 
import { SignUp } from "@clerk/react";

function Signup() {
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
      <SignUp />
    </div>
  );
}

export default Signup;
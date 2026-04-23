import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getErrorMessage = (error) => {
    const detail = error?.response?.data?.detail;

    if (typeof detail === "string" && detail.trim()) return detail;

    if (Array.isArray(detail) && detail.length > 0) {
      const first = detail[0];
      if (typeof first === "string" && first.trim()) return first;
      if (first?.msg) return first.msg;
    }

    return "Login failed";
  };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter email and password.");
      return;
    }

    try {
      const res = await API.post("/login", {
        email: email.trim().toLowerCase(),
        username: email.trim().toLowerCase(),
        password: password.trim(),
      });

      localStorage.setItem("token", res.data.access_token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>AI Resume Analyzer</h2>

        <input
          style={styles.input}
          name="email" // ✅ ADD THIS
          type="email" // ✅ ADD THIS (important)
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          name="password" // ✅ ADD THIS
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          id="login-btn" // ✅ ADD THIS
          style={styles.button}
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-sm text-center mt-4 text-gray-500">
          Don't have an account?
          <span
            className="text-blue-600 cursor-pointer ml-1"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  card: {
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    width: "90%",
    maxWidth: "400px",
  },
  title: {
    marginBottom: "25px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};
export default Login;

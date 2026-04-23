import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Register() {
  const [name, setName] = useState("");
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

    return "Registration failed";
  };

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in name, email, and password.");
      return;
    }

    try {
      await API.post("/register", {
        name: name.trim(),
        username: name.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim(),
      });

      toast.success("Registration successful");
      navigate("/");
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;

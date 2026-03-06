import { useEffect, useState } from "react";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";

function App() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setDark={setDark} dark={dark} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<Dashboard setDark={setDark} dark={dark} />}
        />
        <Route
          path="/upload"
          element={<Upload setDark={setDark} dark={dark} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

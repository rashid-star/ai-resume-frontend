import { useNavigate } from "react-router-dom";

function Navbar({ dark, setDark }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 transition">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          AI Resume Analyzer
        </h1>

        <div className="flex gap-4 items-center">
          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm bg-gray-100 dark:bg-gray-800 dark:text-white transition"
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>

          <button
            onClick={() => navigate("/upload")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition shadow-sm"
          >
            Upload
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition shadow-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

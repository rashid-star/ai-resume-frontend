import toast from "react-hot-toast";
import { useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

function Upload({ dark, setDark }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      await API.post("/upload-resume", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Force full reload so dashboard fetches fresh data
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-black transition">
      <Navbar dark={dark} setDark={setDark} />
      <div className="flex items-center justify-center px-4 py-16">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 w-full max-w-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Upload Resume
          </h2>

          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-blue-500 transition">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="mb-4"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Only PDF files supported
            </p>
          </div>

          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Analyzing Resume..." : "Upload & Analyze"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;

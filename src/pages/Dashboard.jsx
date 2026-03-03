import { useEffect, useState } from "react";
import API from "../api/api";
import ResumeCard from "../components/ResumeCard";
import Navbar from "../components/Navbar";

function Dashboard({ dark, setDark }) {
  const [resumes, setResumes] = useState([]);
  const [stats, setStats] = useState({
    total_resumes: 0,
    average_score: 0,
    best_resume_score: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/my-dashboard");

        if (res.data.resumes) {
          setResumes(res.data.resumes);
          setStats({
            total_resumes: res.data.total_resumes || 0,
            average_score: res.data.average_score || 0,
            best_resume_score: res.data.best_resume_score || 0,
          });
        }
      } catch (error) {
        console.error("Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-black transition">
      {" "}
      <Navbar dark={dark} setDark={setDark} />
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-500 text-lg">
            Loading dashboard...
          </div>
        )}

        {!loading && (
          <>
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition">
                <p className="text-gray-500 text-sm mb-2">Total Resumes</p>
                <h2 className="text-3xl font-bold text-indigo-600">
                  {stats.total_resumes}
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition">
                <p className="text-gray-500 text-sm mb-2">Average Score</p>
                <h2 className="text-3xl font-bold text-blue-600">
                  {stats.average_score}
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition">
                <p className="text-gray-500 text-sm mb-2">Best Resume Score</p>
                <h2 className="text-3xl font-bold text-green-600">
                  {stats.best_resume_score}
                </h2>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Your Resumes
            </h2>

            {/* Resume List */}
            {resumes.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-12 text-center border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  No Resumes Yet
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Upload your first resume and get AI-powered analysis
                  instantly.
                </p>
                <button
                  onClick={() => (window.location.href = "/upload")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition shadow-md"
                >
                  Upload Resume
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {resumes.map((resume) => (
                  <ResumeCard key={resume.id} resume={resume} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

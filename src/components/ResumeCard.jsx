import { useState } from "react";
import { ChevronDown } from "lucide-react";

function ResumeCard({ resume }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-indigo-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 animate-fadeIn">
      {/* Header */}
      <div
        className="p-6 flex justify-between items-start cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {/* Left Section */}
        <div className="flex items-start gap-3">
          <ChevronDown
            size={20}
            className={`mt-1 transition-transform duration-300 ${
              open ? "rotate-180 text-indigo-500" : "text-gray-400"
            }`}
          />

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {resume.filename}
            </h3>

            <div className="flex gap-6 mt-2 text-sm text-gray-500 dark:text-gray-400">
              <span>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Best Role:
                </span>{" "}
                {resume.best_role || resume.role || "N/A"}
              </span>

              <span>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  ATS:
                </span>{" "}
                {resume.ats_score || 0}
              </span>
            </div>
          </div>
        </div>

        {/* Score Section */}
        <div className="flex flex-col items-end text-right">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-md">
            {resume.resume_score || resume.score || 0}
          </div>
          <p className="text-xs text-gray-400 mt-1">Resume Score</p>
        </div>
      </div>

      {/* Expand Section */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 space-y-6 text-sm text-gray-600 dark:text-gray-300 pt-6">
          {/* Summary */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Summary
            </h4>
            <p className="leading-relaxed">
              {resume.summary || "No summary available."}
            </p>
          </div>

          {/* Strengths */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Strengths
            </h4>
            <p>{resume.strengths || "No strengths listed."}</p>
          </div>

          {/* Missing Skills */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Missing Skills
            </h4>
            <p>{resume.missing_skills || "No missing skills listed."}</p>
          </div>

          {/* Improvements */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Improvements
            </h4>
            <p>{resume.improvements || "No improvements listed."}</p>
          </div>

          {/* Extra Info */}
          <div className="flex flex-wrap gap-6 text-xs text-gray-400">
            <span>
              <span className="font-medium text-gray-600 dark:text-gray-300">
                Domain:
              </span>{" "}
              {resume.domain || "N/A"}
            </span>

            <span>
              <span className="font-medium text-gray-600 dark:text-gray-300">
                Created:
              </span>{" "}
              {resume.created_at
                ? new Date(resume.created_at).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;

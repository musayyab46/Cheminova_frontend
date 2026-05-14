import React from "react";

const CareerCard = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 space-y-4 border border-gray-100">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-purple-700">
          {data.suggested_goal}
        </h3>
        <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
          {Math.round(data.skill_match_percentage)}% Match
        </span>
      </div>

      {/* Confidence */}
      <p className="text-sm text-gray-500">
        Confidence: {Math.round(data.confidence_score * 100)}%
      </p>

      {/* Skills */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">Matched Skills</p>
        <div className="flex flex-wrap gap-2">
          {data.matched_skills?.map((skill, i) => (
            <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-1">Missing Skills</p>
        <div className="flex flex-wrap gap-2">
          {data.missing_skills?.map((skill, i) => (
            <span key={i} className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Learning Path</p>
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
          {data.learning_path?.map((phase, i) => (
            <div key={i} className="bg-purple-50 p-3 rounded-lg">
              <p className="text-sm font-semibold text-purple-700">
                Phase {phase.phase}: {phase.title}
              </p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                {phase.topics.map((topic, j) => (
                  <li key={j}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="text-sm text-gray-600">
        ⏱ {data.timeline_estimation?.estimated_duration_weeks} weeks •{" "}
        {data.timeline_estimation?.estimated_total_hours} hrs
      </div>

    </div>
  );
};

export default CareerCard;
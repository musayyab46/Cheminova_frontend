import React, { useState } from "react";
import skillsData from "../assets/skills.json";

const PathGenerator = () => {
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);
  const [goal, setGoal] = useState("");
  const [dailyHours, setDailyHours] = useState("");
  const [showPlan, setShowPlan] = useState(false);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Add Skill
  const handleAddSkill = () => {
    const trimmed = skillInput.trim();

    if (!trimmed) {
      setError("Skill cannot be empty.");
      return;
    }

    if (trimmed.length < 3) {
      setError("Skill must be at least 3 characters.");
      return;
    }

    // Check if skill exists in JSON (case insensitive)
    const isValidSkill = skillsData
      .map((skill) => skill.toLowerCase())
      .includes(trimmed.toLowerCase());

    if (!isValidSkill) {
      setError("Please select a valid skill from suggestions.");
      return;
    }

    // Prevent duplicate
    if (
      skills.map((s) => s.toLowerCase()).includes(trimmed.toLowerCase())
    ) {
      setError("Skill already added.");
      return;
    }

    setSkills([...skills, trimmed]);
    setSkillInput("");
    setSuggestions([]);
    setError("");
  };

  // Remove Skill
  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Generate Plan
  const handleGenerate = () => {
    if (skills.length > 0 && goal && dailyHours) {
      setShowPlan(true);
    }
  };

  const weeklyHours = dailyHours * 7;
  const estimatedMonths =
    weeklyHours > 0 ? Math.ceil(300 / weeklyHours) : 0;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-6">
      <div className="max-w-4xl mx-auto">

        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Career Path Generator
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Enter your skills and goals to generate your personalized roadmap.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-6">

          {/* Skills Section */}
          <div className="mb-6 relative">
            <label className="font-semibold text-gray-700 text-sm sm:text-base">
              Your Skills
            </label>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => {
                  const value = e.target.value;
                  setSkillInput(value);

                  if (value.length > 0) {
                    const filtered = skillsData.filter((skill) =>
                      skill.toLowerCase().includes(value.toLowerCase())
                    );
                    setSuggestions(filtered.slice(0, 5));
                  } else {
                    setSuggestions([]);
                  }
                }}
                placeholder="Example: Technical Analysis"
                className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm sm:text-base"
              />

              <button
                onClick={handleAddSkill}
                className="w-full sm:w-auto bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
              >
                Add Skill
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-md max-h-40 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSkillInput(suggestion);
                      setSuggestions([]);
                    }}
                    className="p-2 hover:bg-purple-100 cursor-pointer text-sm"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-2 break-words"
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(index)}
                    className="text-red-500 text-xs"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Goal Section */}
          <div className="mb-6">
            <label className="font-semibold text-gray-700 text-sm sm:text-base">
              Career Goal
            </label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Become consistently profitable trader"
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm sm:text-base"
            />
          </div>

          {/* Daily Hours */}
          <div className="mb-6">
            <label className="font-semibold text-gray-700 text-sm sm:text-base">
              Daily Study Hours
            </label>
            <input
              type="number"
              value={dailyHours}
              onChange={(e) => setDailyHours(e.target.value)}
              placeholder="2"
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm sm:text-base"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:opacity-90 transition text-sm sm:text-base"
          >
            Generate Roadmap
          </button>
        </div>

        {/* Result Card */}
        {showPlan && (
          <div className="mt-8 bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
              Your Personalized Trading Plan
            </h2>

            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
              <p><strong>Goal:</strong> {goal}</p>
              <p><strong>Total Skills:</strong> {skills.length}</p>
              <p><strong>Weekly Study Hours:</strong> {weeklyHours} hrs</p>
              <p><strong>Estimated Completion:</strong> {estimatedMonths} months</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PathGenerator;

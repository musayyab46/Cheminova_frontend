import React, { useState } from "react";
import skillsData from "../assets/skills.json";
import CourseCard from "../components/CourseCard";
import { courses } from "./Courses";
import API from "../services/api";

const PathGenerator = () => {
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState({});
  const [goal, setGoal] = useState("");
  const [dailyHours, setDailyHours] = useState("");
  const [showPlan, setShowPlan] = useState(false);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [planData, setPlanData] = useState(null);

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

    // Validate skill
    const isValidSkill = skillsData
      .map((skill) => skill.toLowerCase())
      .includes(trimmed.toLowerCase());

    if (!isValidSkill) {
      setError("Please select a valid skill from suggestions.");
      return;
    }

    // Prevent duplicates (case insensitive)
    if (
      Object.keys(skills).some(
        (s) => s.toLowerCase() === trimmed.toLowerCase()
      )
    ) {
      setError("Skill already added.");
      return;
    }

    // Add skill with default rating = 1
    setSkills({
      ...skills,
      [trimmed]: 1,
    });

    setSkillInput("");
    setSuggestions([]);
    setError("");
  };

  // Remove Skill
  const handleRemoveSkill = (skillName) => {
    const updated = { ...skills };
    delete updated[skillName];
    setSkills(updated);
  };

  //recommended courses
  const getRecommendedCourses = (courses, userSkillsObj) => {
  const userSkills = Object.keys(userSkillsObj).map(skill =>
    skill.toLowerCase().trim()
  );

  return courses
    .map(course => {
      let matchCount = 0;

      course.skills.forEach(skill => {
        userSkills.forEach(userSkill => {
          if (
            skill.toLowerCase().includes(userSkill) ||
            userSkill.includes(skill.toLowerCase())
          ) {
            matchCount++;
          }
        });
      });

      return { ...course, matchCount };
    })
    .filter(course => course.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 6); // limit
};

  // Generate Plan
  const handleGenerate = async () => {
    if (Object.keys(skills).length === 0 ||
        !goal.trim() ||
          Number(dailyHours) <= 0) {
            setError("Please fill all fields correctly.");
             return;
          }
      const payload = {
        skills: skills,
        goal: goal,
        daily_study_hours: Number(dailyHours),
      };

      try {
    setLoading(true);
    setError("");
    console.log(payload);
    const res = await API.post("/user/learning-path", payload);
    
    // get recommended courses
    const recommendedCourses=getRecommendedCourses(courses,skills);
    console.log("Response:", res.data);
    const formattedPlan = {
  goal: res.data.suggested_goal,
  match: res.data.skill_match_percentage,
  analysis: res.data.match_analysis,
  matchedSkills: res.data.matched_skills,
  missingSkills: res.data.missing_skills,
  roadmap: res.data.learning_path,
  timeline: res.data.timeline_estimation,
  recommendedCourses:
        recommendedCourses.length > 0
          ? recommendedCourses
          : res.data.recommended_courses,
};

    setPlanData(formattedPlan); // store backend result
    setShowPlan(true);
  } catch (err) {
    console.error(err);
    setError("Failed to generate roadmap. Try again.");
  } finally {
    setLoading(false);
  } 
  };

  const weeklyHours = Number(dailyHours) * 7;
  const estimatedMonths =
    weeklyHours > 0 ? Math.ceil(300 / weeklyHours) : 0;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Career Path Generator
          </h1>
          <p className="text-gray-500 mt-2">
            Enter your skills and goals to generate your personalized roadmap.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-white rounded-2xl shadow-md border p-4 sm:p-6">

          {/* Skills */}
          <div className="mb-6 relative">
            <label className="font-semibold text-gray-700">
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
                className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />

              <button
                onClick={handleAddSkill}
                className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700"
              >
                Add Skill
              </button>
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="absolute w-full bg-white border rounded-lg mt-1 shadow-md max-h-40 overflow-y-auto z-10">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSkillInput(suggestion);
                      setSuggestions([]);
                      setError("");
                    }}
                    className="p-2 hover:bg-purple-100 cursor-pointer"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {Object.entries(skills).map(([skill, rating]) => (
                <span
                  key={skill}
                  className="bg-purple-100 text-purple-700 px-3 py-2 rounded-full flex items-center gap-2 flex-wrap text-sm"
                >
                  {skill}

                  {/* Rating */}
                  <select
                    value={rating}
                    onChange={(e) =>
                      setSkills({
                        ...skills,
                        [skill]: Number(e.target.value),
                      })
                    }
                    className="text-xs border rounded px-1"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>

                  {/* Remove */}
                  <button
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-red-500 text-xs"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div className="mb-6">
            <label className="font-semibold text-gray-700">
              Career Goal
            </label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Become consistently profitable trader"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Daily Hours */}
          <div className="mb-6">
            <label className="font-semibold text-gray-700">
              Daily Study Hours
            </label>
            <input
              type="number"
              value={dailyHours}
              onChange={(e) => setDailyHours(e.target.value)}
              placeholder="2"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold"
          >
            Generate Roadmap
          </button>
        </div>

        {/* Result */}
        {showPlan && planData && (
  <div className="mt-8 space-y-6">

    {/* 🔥 HEADER */}
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold">
        Your Personalized Plan 🚀
      </h2>

      <p className="mt-2 text-sm opacity-90">
        {planData.analysis}
      </p>

      {/* BADGES */}
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <span className="bg-white/20 px-3 py-1 rounded-full">
          🎯 {planData.goal}
        </span>
        <span className="bg-white/20 px-3 py-1 rounded-full">
          📊 {planData.match}% Match
        </span>
        <span className="bg-white/20 px-3 py-1 rounded-full">
          ⏳ {planData.timeline?.estimated_duration_weeks} weeks
        </span>
      </div>

      {/* ✅ PROGRESS BAR */}
      <div className="mt-5">
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span>{planData.match}%</span>
        </div>

        <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full transition-all duration-700"
            style={{ width: `${planData.match}%` }}
          ></div>
        </div>
      </div>
    </div>

    {/* 🔥 SKILLS */}
    <div className="grid md:grid-cols-2 gap-4">

      {/* Matched */}
      <div className="bg-white p-4 rounded-xl shadow border">
        <h3 className="font-semibold mb-3 text-green-600">
          ✅ Matched Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {planData.matchedSkills?.map((skill, i) => (
            <span
              key={i}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Missing */}
      <div className="bg-white p-4 rounded-xl shadow border">
        <h3 className="font-semibold mb-3 text-red-500">
          ❌ Missing Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {planData.missingSkills?.map((skill, i) => (
            <span
              key={i}
              className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* 🔥 ROADMAP TIMELINE */}
<div className="bg-white p-5 rounded-xl shadow border">
  <h3 className="font-semibold mb-6 text-indigo-600 text-lg">
    📚 Learning Roadmap
  </h3>

  <div className="relative border-l-2 border-indigo-200 ml-4">

    {planData.roadmap?.map((phase, index) => {
      const isCompleted =
        index < Math.floor(planData.match / 25);

      return (
        <div key={index} className="mb-8 ml-6">

          {/* Dot */}
          <span
            className={`absolute -left-3 flex items-center justify-center w-7 h-7 rounded-full ring-4 ring-white 
            ${isCompleted ? "bg-green-500" : "bg-indigo-500"}`}
          >
            <span className="text-white text-xs font-bold">
              {phase.phase}
            </span>
          </span>

          {/* Card */}
          <div
            className={`p-4 rounded-lg shadow-sm transition 
            ${
              isCompleted
                ? "bg-green-50 border border-green-300"
                : "bg-gray-50"
            }`}
          >
            {/* Phase Title */}
            <p className="font-semibold text-gray-800 text-lg">
              {phase.title}
            </p>

            {/* Topics */}
            <div className="mt-3 flex flex-wrap gap-2">
              {phase.topics?.map((topic, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>

          </div>
        </div>
      );
    })}
  </div>
</div>

    {/* 🔥 COURSES */}
    <div className="bg-white p-5 rounded-xl shadow border">
  <h3 className="font-semibold mb-2 text-purple-600 text-lg">
    🎓 Recommended Courses
  </h3>

  <p className="text-sm text-gray-500 mb-4">
    Based on your skills and learning goal
  </p>

  {planData.recommendedCourses?.length > 0 ? (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      
      {planData.recommendedCourses.map((course, index) => (
        <div key={course.id || index} className="relative">
          
          {/* 🔥 Top Pick Badge */}
          {index === 0 && (
            <span className="absolute top-3 right-2 z-10 text-xs bg-yellow-300 px-2 py-1 rounded-md font-medium">
              Top Pick
            </span>
          )}

          {/* ✅ Your Ready-Made Component */}
          <CourseCard 
            course={course} 
            showMatch={true}
          />
        </div>
      ))}

    </div>
  ) : (
    <p className="text-gray-500 text-sm">
      No recommendations found based on your skills.
    </p>
  )}
</div>

  </div>
)}
      </div>
    </div>
  );
};





export default PathGenerator;

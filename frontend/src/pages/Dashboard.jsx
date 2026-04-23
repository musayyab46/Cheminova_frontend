import DashboardHero from "../components/Dashboard/DashboardHero";
import CareerRoadmapPreview from "../components/Dashboard/CareerRoadmapPreview";
import QuickActions from "../components/Dashboard/QuickActions";
import RecommendedCourses from "../components/Dashboard/RecommendedCourses";
import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRoadmap = async () => {
    try {
  const res = await API.get("/user/generated-path");

  const data = res.data;

  if (data && data.length > 0) {
    const latest = data[0]; // or data[data.length - 1] if needed

    // 🔥 Dynamic sentence generator (no hardcoding)
    const actions = [
      "Learn",
      "Understand",
      "Practice",
      "Master",
      "Build projects using",
    ];

    const steps =
      latest.learning_path?.flatMap((phase, phaseIndex) =>
        phase.topics.map((topic, topicIndex) => {
          const action = actions[topicIndex % actions.length];

          return `Phase ${phaseIndex + 1}: ${phase.title} → ${action} ${topic} and apply it in real projects`;
        })
      ) || [];

    setRoadmap(steps);
  } else {
    setRoadmap([]);
  }
} catch (error) {
  console.error("Error fetching roadmap:", error);
  setRoadmap([]);
}
   finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoadmap();
  }, []);

  return (
    <>
      <div className="space-y-12">
        <DashboardHero />
      </div>

      <CareerRoadmapPreview roadmap={roadmap} loading={loading} />

      <QuickActions />
      <RecommendedCourses />
    </>
  );
};

export default Dashboard;

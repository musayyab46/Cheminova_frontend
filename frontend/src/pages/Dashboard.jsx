import DashboardHero from "../components/Dashboard/DashboardHero";
import CareerRoadmapPreview from "../components/Dashboard/CareerRoadmapPreview";
import QuickActions from "../components/Dashboard/QuickActions";
import RecommendedCourses from "../components/Dashboard/RecommendedCourses";


const Dashboard = () => {
  return (
    <>
    <div className="space-y-12">
      <DashboardHero />
    </div>
      <CareerRoadmapPreview/>
      <QuickActions/>
      <RecommendedCourses/>
      </>
  );
};

export default Dashboard;

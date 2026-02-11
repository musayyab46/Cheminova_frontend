import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import HowItWorks from "../components/HowItWorks";
import { FaBrain, FaLightbulb, FaGraduationCap,FaBookOpen} from "react-icons/fa";

const Features = () => {
  return (
    <div>
      {/* Hero section */}
      <HeroSection />
      {/* Features Section */}
      <section className="py-16 bg-gray-100 rounded-3xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Cheminova?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 ">
          <FeatureCard
            icon={FaBrain}
            title="Personalized Guidance"
            description="AI analyzes your skills and interests to provide a career path tailored to you."
          />
          <FeatureCard
            icon={FaLightbulb}
            title="Smart Recommendations"
            description="Get suggested courses, skills, and experiences to excel in your chosen path."
          />
          <FeatureCard
            icon={FaGraduationCap}
            title="Career Growth"
            description="Follow a structured path that leads to successful career opportunities."
          />
          <FeatureCard
            icon={FaBookOpen} // You can use any suitable React Icon
            title="Course Recommendation System"
            description="Receive AI-driven course suggestions tailored to your skills, interests, and career goals."
          />
        </div>
      </div>
    </section>
    <HowItWorks/>
    </div>
  );
};

export default Features;

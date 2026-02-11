import React from "react";
import FeatureCard from "../components/FeatureCard";
import { Compass, Map, ArrowUpRight, Target } from "lucide-react";

// Optional team member images
import Member1 from "../assets/member1.avif";

const AboutPage = () => {
  const features = [
    {
      icon: Compass,
      title: "Personalized Guidance",
      description:
        "AI analyzes your skills and interests to provide a career path tailored to you.",
    },
    {
      icon: Map,
      title: "Course Recommendations",
      description:
        "Receive AI-driven course suggestions based on your goals and skills.",
    },
    {
      icon: ArrowUpRight,
      title: "Step-by-Step Plan",
      description:
        "Follow a structured path to achieve your career objectives efficiently.",
    },
    {
      icon: Target,
      title: "Career Growth",
      description:
        "Gain actionable guidance to progress towards your dream career.",
    },
  ];

  const team = [
    {
      name: "Zunaid Ahemed",
      role: "Backend Developer",
      image: Member1,
    },
    {
      name: "Sujal Chauhan",
      role: "Devops Specialist",
      image: Member1,
    },
    {
      name: "Musayyab",
      role: "Full Stack Developer",
      image: Member1,
    },
  ];

  return (
    <div className="flex flex-col gap-20">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-500 py-16 px-4 text-center rounded-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          About Our Platform
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          We empower students to discover meaningful careers using AI. Get personalized guidance, actionable recommendations, and a clear path to your goals.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
          Our mission is to help students make informed career decisions by leveraging AI to analyze their skills, interests, and aspirations, providing a roadmap for success.
        </p>
      </section>

      {/* Features Section */}
      <section className="px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          How We Help
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12">
          Meet the Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-40 sm:w-48 p-4 rounded-3xl bg-white shadow-lg hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-purple-600 text-white py-16 px-4 text-center rounded-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Ready to discover your career path?
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto">
          Start your journey today and let AI guide you to the career of your dreams.
        </p>
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutPage;

import React from "react";
import {useEffect,useState} from 'react';
import { FaUserGraduate, FaLightbulb, FaLaptopCode } from "react-icons/fa";

const HowItWorksHero = () => {
  const steps = [
    {
      icon: FaUserGraduate,
      title: "Enter Your Profile",
      description: "Provide your skills, interestss, qualifications, and career goals.",
    },
    {
      icon: FaLightbulb,
      title: "AI Analysis",
      description: "Our AI analyzes your inputs and identifies suitable career paths.",
    },
    {
      icon: FaLaptopCode,
      title: "Get Recommendations",
      description: "Receive personalized course suggestions and actionable guidance.",
    },
  ];
   const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 1000); // 1 second
    return () => clearInterval(interval);
  }, [steps.length]);
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 rounded-3xl">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          How It Works?
        </h2>
        <p className="text-white mb-12 text-sm sm:text-base md:text-lg">
          Our AI guides you step-by-step from understanding your skills to finding the right courses and career path.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-transform duration-500 flex flex-col items-center text-center
                ${activeIndex === index ? "scale-105" : "scale-100"}
              `}
            >
              <div className="text-purple-600 text-5xl mb-4">
                <step.icon />
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;

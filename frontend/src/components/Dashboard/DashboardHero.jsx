import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {useNavigate} from 'react-router-dom'
import aiAnimation from "../../assets/Brainnetwork.json"; 



const DashboardHero = () => {
    const navigate=useNavigate();
    const scrollToRoadmap = () => {
  const section = document.getElementById("roadmap-preview");
  section?.scrollIntoView({
    behavior: "smooth",
  });
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-purple-500 to-blue-500 
                 rounded-3xl p-8 md:p-12 text-white shadow-lg"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Build Your Career with AI Guidance 
          </h1>

          <p className="mt-4 text-lg text-gray-100">
            Generate a personalized roadmap tailored to your goals,
            skills, and aspirations. Let AI design your success path.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 w-full">
            <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow-md 
                               hover:scale-105 transition-all duration-300" onClick={()=>{
                                navigate("/generatePath")
                               }}>
              Generate Career Path
            </button>

            <button className="border border-white px-6 py-3 rounded-xl 
                               hover:bg-white hover:text-purple-600 
                               transition-all duration-300" onClick={scrollToRoadmap}>
              View My Roadmap
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - LOTTIE */}
        <div className="flex justify-center lg:justify-end items-center">
        
          <Lottie 
            animationData={aiAnimation} 
            loop={true} 
            className="w-[250px] md:w-[350px]" 
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardHero;

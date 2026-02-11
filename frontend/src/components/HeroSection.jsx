import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/Student.json";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-[80vh] flex items-center justify-center px-4 py-8 sm:py-12 overflow-auto rounded-3xl">
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center gap-6">

        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
            Discover Your Perfect Career Path with AI
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white mb-6">
            Enter your skills, interests, and goals — and let AI guide you to the best career options.
          </p>
          <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>

        {/* Right Animation */}
        <div className="flex-1 flex justify-center">
          <Player
            autoplay
            loop
            src={animationData}
            style={{
              width: "100%",
              maxWidth: "300px", // responsive size for mobile
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

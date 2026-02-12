import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/education.json";
import {Typewriter} from "react-simple-typewriter";

const CourseHero = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Explore Our{" "}
            <span className="text-blue-600">
                  <Typewriter
                words={["Courses"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Upgrade your skills with industry-level courses designed to help
            you grow in development, AI, data science, and more.
          </p>

          {/* Search Bar */}
          {/* <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition max-w-md mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none flex-grow text-gray-700 text-sm sm:text-base"
            />
            <span className="text-gray-500 ml-2">🔍</span>
          </div>*/}
        </div> 

        {/* Right Lottie Animation */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-3xl">
          <Lottie
            animationData={animationData}
            loop
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  );
};

export default CourseHero;

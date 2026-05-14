import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      
      {/* Course Image */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {course.description}
        </p>

        {/* Course Info */}
        <div className="text-sm text-gray-500 mb-3">
          <p>⏱ {course.duration} • {course.lessons} Lessons</p>
          <p>⭐ {course.rating} ({course.students} students)</p>
        </div>

        {/* Price + Button */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ₹{course.price}
          </span>

          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

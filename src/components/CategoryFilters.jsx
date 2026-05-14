import React from "react";

const CategoryFilters = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        
        {/* Scrollable Container */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;

import React, { useState, useMemo } from "react";
import CoursesHero from "../components/CourseHero";
import CategoryFilters from "../components/CategoryFilters";
import CourseCard from "../components/CourseCard";
const categories = [
    "All",
    "Development",
    "AI",
    "Data Science",
    "Cloud",
  ];
export const courses = [
    {
      id: 1,
      title: "Full Stack Web Development Bootcamp",
      description:
        "Learn React, Node.js, MongoDB and build complete full stack applications.",
      category: "Development",
      duration: "32 Hours",
      lessons: 120,
      rating: 4.8,
      students: 3245,
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Machine Learning A-Z",
      description:
        "Master machine learning algorithms and build intelligent systems.",
      category: "AI",
      duration: "28 Hours",
      lessons: 98,
      rating: 4.7,
      students: 2810,
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1507149833265-60c372daea22",
    },
    {
      id: 3,
      title: "Data Science with Python",
      description:
        "Analyze data, build models and visualize insights using Python.",
      category: "Data Science",
      duration: "24 Hours",
      lessons: 85,
      rating: 4.6,
      students: 2104,
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      id: 4,
      title: "AWS Cloud Practitioner Course",
      description:
        "Understand cloud fundamentals and deploy scalable cloud applications.",
      category: "Cloud",
      duration: "18 Hours",
      lessons: 60,
      rating: 4.5,
      students: 1650,
      price: 999,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
  ];
const Courses = () => {
  // 🔹 State
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  

  // 🔹 Combined Filter Logic
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" ||
        course.category === activeCategory;

      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔥 Sticky Search Bar */}
      <div className="w-full bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none flex-grow text-gray-700 text-sm sm:text-base"
            />
            <span className="text-gray-500 ml-2">🔍</span>
          </div>
        </div>
      </div>

      {/* 🔹 Hero Section */}
      <CoursesHero />

      {/* 🔹 Category Filters */}
      <CategoryFilters
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* 🔹 Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        <p className="text-gray-600 mb-6">
          Showing {filteredCourses.length} course(s)
        </p>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-20">
            No courses found. Try adjusting your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

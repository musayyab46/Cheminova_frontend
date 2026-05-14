import { useNavigate } from "react-router-dom";
import { courses } from "../../pages/Courses";

const RecommendedCoursesPreview = () => {
  const navigate = useNavigate();

  // Show only first 3 courses on dashboard
  const previewCourses = courses.slice(0, 3);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">

  {/* Softer Background (lighter for mobile) */}
  <div className="absolute inset-0 bg-gradient-to-br 
                  from-purple-50 via-white to-indigo-50" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

    {/* Cleaner Container */}
    <div className="bg-white md:bg-white/80 md:backdrop-blur-xl
                    border border-gray-100
                    md:border-purple-100
                    rounded-2xl md:rounded-3xl
                    shadow-md md:shadow-xl
                    p-6 sm:p-8 md:p-10">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row 
                      md:items-center md:justify-between 
                      mb-10 md:mb-14">

        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Recommended Courses
          </h2>

          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-md">
            Continue learning based on your personalized roadmap.
          </p>
        </div>

        {/* Desktop Button */}
        <button
          onClick={() => navigate("/courses")}
          className="hidden md:inline-flex items-center
                     px-6 py-3
                     bg-gradient-to-r from-purple-600 to-indigo-600
                     text-white rounded-xl
                     shadow-md hover:shadow-xl
                     hover:scale-105 transition-all duration-300"
        >
          View All Courses →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {previewCourses.map((course) => (
          <div
            key={course.id}
            className="group bg-white rounded-2xl md:rounded-3xl
                       shadow-sm hover:shadow-lg
                       transition-all duration-300
                       overflow-hidden"
          >
            {/* Image */}
            <div className="h-40 sm:h-44 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover
                           group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-5">
              <h3 className="text-base sm:text-lg font-semibold
                             group-hover:text-purple-700 transition">
                {course.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {course.description}
              </p>

              <div className="mt-5 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  ⭐ {course.rating}
                </span>

                <button
                  onClick={() => navigate(`/course/${course.id}`)}
                  className="text-xs sm:text-sm px-4 py-2
                             bg-purple-100 text-purple-700
                             rounded-lg hover:bg-purple-600
                             hover:text-white transition"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="mt-10 text-center md:hidden">
        <button
          onClick={() => navigate("/courses")}
          className="w-full sm:w-auto
                     px-6 py-3
                     bg-gradient-to-r from-purple-600 to-indigo-600
                     text-white rounded-xl
                     shadow-md
                     active:scale-95
                     transition-all duration-200"
        >
          View All Courses
        </button>
      </div>

    </div>
  </div>
</section>

  );
};

export default RecommendedCoursesPreview;

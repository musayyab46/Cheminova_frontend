import { useNavigate } from "react-router-dom";
import { Rocket, Eye,BookOpen , User } from "lucide-react";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Generate Path",
      description: "Create a new AI-powered roadmap",
      icon: <Rocket size={28} />,
      action: () => navigate("/generatePath"),
    },
    {
      title: "View Roadmap",
      description: "See your current career roadmap",
      icon: <Eye size={28} />,
      action: () =>
        document
          .getElementById("roadmap-preview")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      title: "View Courses",
      description: "Explore the Up skilling Courses",
      icon: <BookOpen size={28} />,
      action: () => navigate("/courses"),
    },
    {
      title: "Update Profile",
      description: "Manage your preferences",
      icon: <User size={28} />,
      action: () => navigate("/profile"),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Quick Actions
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Access important features instantly and manage your career journey with ease.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {actions.map((item, index) => (
        <div
          key={index}
          onClick={item.action}
          className="group relative cursor-pointer 
                     bg-white/70 backdrop-blur-md
                     border border-purple-100
                     rounded-3xl p-8
                     shadow-md
                     hover:shadow-2xl
                     hover:-translate-y-2
                     transition-all duration-300"
        >
          
          {/* Top Gradient Accent */}
          <div className="absolute top-0 left-0 w-full h-1 
                          bg-gradient-to-r from-purple-500 to-indigo-500 
                          rounded-t-3xl opacity-0 
                          group-hover:opacity-100 
                          transition-all duration-300" />

          {/* Icon Circle */}
          <div className="w-14 h-14 mx-auto flex items-center justify-center 
                rounded-2xl 
                bg-gradient-to-br from-purple-100 to-indigo-100
                text-purple-600 
                mb-6
                group-hover:scale-110 
                group-hover:bg-gradient-to-br 
                group-hover:from-purple-600 
                group-hover:to-indigo-600
                group-hover:text-white
                transition-all duration-300">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-lg mb-3 
                         group-hover:text-purple-700 
                         transition text-center">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            {item.description}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>

  );
};

export default QuickActions;

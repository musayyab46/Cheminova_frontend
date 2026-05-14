import {
  BrainCircuit,
  GraduationCap,
  Target,
  BarChart3,
  Rocket,
  BookOpen,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Roadmap Generator",
    description:
      "Generate personalized learning paths based on your skills and goals.",
  },
  {
    icon: GraduationCap,
    title: "Curated Courses",
    description:
      "Get the most relevant courses and resources recommended for your journey.",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    description:
      "Identify missing skills and understand what to learn next.",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    description:
      "Monitor your roadmap progress and stay consistent while learning.",
  },
  {
    icon: Rocket,
    title: "Project Recommendations",
    description:
      "Build real-world projects that strengthen your portfolio and skills.",
  },
  {
    icon: BookOpen,
    title: "Structured Learning",
    description:
      "Learn step-by-step without confusion or unnecessary topics.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 px-5 sm:px-8 lg:px-16">

      {/* SECTION HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2
          className="
          text-4xl sm:text-5xl
          font-bold
          text-white
          "
        >
          Powerful Features for{" "}

          <span
            className="
            bg-gradient-to-r
            from-purple-400 to-indigo-400
            bg-clip-text text-transparent
            "
          >
            Smarter Learning
          </span>
        </h2>

        <p
          className="
          mt-6
          text-gray-400
          text-lg
          leading-relaxed
          "
        >
          Everything you need to build personalized learning
          paths, discover the right courses, and grow your
          skills faster with AI guidance.
        </p>
      </motion.div>

      {/* FEATURE GRID */}
      <div
        className="
        mt-16
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        max-w-7xl mx-auto
        "
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
              group
              relative

              rounded-3xl
              border border-white/10

              bg-white/[0.03]
              backdrop-blur-xl

              p-6

              hover:border-purple-500/30
              transition-all duration-300

              overflow-hidden
              "
            >

              {/* Glow Effect */}
              <div
                className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-500

                bg-gradient-to-br
                from-purple-500/10
                to-indigo-500/10
                "
              />

              {/* Icon */}
              <div
                className="
                relative
                w-14 h-14
                rounded-2xl

                bg-gradient-to-r
                from-purple-600
                to-indigo-600

                flex items-center justify-center

                shadow-lg shadow-purple-900/30
                "
              >
                <Icon className="text-white" size={26} />
              </div>

              {/* Content */}
              <div className="relative mt-6">

                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p
                  className="
                  mt-3
                  text-gray-400
                  leading-relaxed
                  "
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
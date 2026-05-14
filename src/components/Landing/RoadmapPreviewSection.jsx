import {
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Code2,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const roadmapPhases = [
  {
    title: "Frontend Fundamentals",
    skills: ["HTML", "CSS", "JavaScript"],
    progress: "25%",
    icon: BookOpen,
  },
  {
    title: "React Ecosystem",
    skills: ["React", "Tailwind", "Redux"],
    progress: "50%",
    icon: Code2,
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "MongoDB"],
    progress: "75%",
    icon: Rocket,
  },
];

const RoadmapPreviewSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="
      relative

      overflow-hidden

      py-16 sm:py-20 lg:py-24
      px-4 sm:px-6 lg:px-16
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute top-0 left-0

        w-64 h-64 sm:w-96 sm:h-96

        bg-purple-600/10
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        absolute bottom-0 right-0

        w-64 h-64 sm:w-96 sm:h-96

        bg-indigo-600/10
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        relative

        max-w-7xl mx-auto

        grid
        grid-cols-1
        lg:grid-cols-2

        gap-12 lg:gap-16

        items-center
        "
      >

        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >

          {/* BADGE */}
          <div
            className="
            inline-flex items-center gap-2

            px-4 py-2
            rounded-full

            bg-white/10
            border border-white/10

            text-xs sm:text-sm
            text-gray-300
            "
          >
            <CheckCircle2
              size={16}
              className="text-green-400"
            />

            AI Generated Learning Roadmap
          </div>

          {/* HEADING */}
          <h2
            className="
            mt-6

            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-bold
            leading-tight
            text-white
            "
          >
            Visualize Your{" "}

            <span
              className="
              bg-gradient-to-r
              from-purple-400
              to-indigo-400

              bg-clip-text
              text-transparent
              "
            >
              Learning Journey
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
            mt-6

            text-gray-400

            text-base
            sm:text-lg

            leading-relaxed

            max-w-2xl

            mx-auto lg:mx-0
            "
          >
            Get a step-by-step roadmap tailored to your
            current skills and career goals. Learn in the
            right order with AI-powered recommendations.
          </p>

          {/* POINTS */}
          <div
            className="
            mt-10

            space-y-4 sm:space-y-5

            max-w-xl

            mx-auto lg:mx-0
            "
          >

            {[
              "Personalized skill-based roadmap",
              "Recommended projects & courses",
              "Structured learning progression",
              "Track learning milestones easily",
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                flex items-start sm:items-center
                gap-3

                text-left
                "
              >
                <CheckCircle2
                  size={20}
                  className="
                  text-green-400
                  shrink-0
                  mt-0.5 sm:mt-0
                  "
                />

                <p
                  className="
                  text-gray-300
                  text-sm sm:text-base
                  "
                >
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
            mt-10

            mx-auto lg:mx-0

            group

            px-6 sm:px-7
            py-3.5 sm:py-4

            rounded-2xl

            bg-gradient-to-r
            from-purple-600
            to-indigo-600

            font-semibold

            flex items-center gap-2

            shadow-lg shadow-purple-900/30
            "
            onClick={() => navigate("/signup")}
          >
            Generate My Roadmap

            <ArrowRight
              size={18}
              className="
              group-hover:translate-x-1
              transition
              "
            />
          </motion.button>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* MAIN CARD */}
          <div
            className="
            rounded-3xl
            border border-white/10

            bg-white/[0.04]
            backdrop-blur-xl

            p-4 sm:p-6 lg:p-8

            shadow-2xl
            "
          >

            {/* TOP */}
            <div
              className="
              flex flex-col sm:flex-row
              sm:items-center
              sm:justify-between

              gap-5
              "
            >

              <div>

                <h3
                  className="
                  text-xl sm:text-2xl
                  font-bold
                  text-white
                  "
                >
                  Full Stack Developer
                </h3>

                <p
                  className="
                  text-gray-400
                  mt-1
                  text-sm sm:text-base
                  text
                  "
                >
                  Personalized AI roadmap
                </p>
              </div>

              <div
                className="
                w-14 h-14

                rounded-2xl

                bg-gradient-to-r
                from-purple-600
                to-indigo-600

                flex items-center justify-center
                "
              >
                <Rocket className="text-white" />
              </div>
            </div>

            {/* TIMELINE */}
            <div className="mt-10 space-y-5 sm:space-y-6">

              {roadmapPhases.map((phase, index) => {
                const Icon = phase.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.02,
                    }}
                    className="
                    relative

                    rounded-2xl
                    border border-white/10

                    bg-white/[0.03]

                    p-4 sm:p-5

                    transition-all duration-300
                    "
                  >

                    {/* TIMELINE DOT */}
                    <div
                      className="
                      absolute

                      -left-2 sm:-left-3
                      top-7 sm:top-8

                      w-5 h-5 sm:w-6 sm:h-6

                      rounded-full

                      bg-gradient-to-r
                      from-purple-500
                      to-indigo-500

                      border-[3px] sm:border-4
                      border-[#0B1120]
                      "
                    />

                    <div
                      className="
                      flex flex-col
                      gap-5
                      "
                    >

                      {/* TOP ROW */}
                      <div
                        className="
                        flex flex-col sm:flex-row
                        sm:items-start
                        sm:justify-between

                        gap-4
                        "
                      >

                        <div className="flex gap-4">

                          <div
                            className="
                            w-11 h-11 sm:w-12 sm:h-12

                            rounded-xl

                            bg-gradient-to-r
                            from-purple-600
                            to-indigo-600

                            flex items-center justify-center

                            shrink-0
                            "
                          >
                            <Icon
                              size={20}
                              className="text-white"
                            />
                          </div>

                          <div>

                            <h4
                              className="
                              font-semibold

                              text-base sm:text-lg
                              text-white
                              "
                            >
                              {phase.title}
                            </h4>

                            <div
                              className="
                              flex flex-wrap
                              gap-2

                              mt-3
                              "
                            >

                              {phase.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="
                                  px-3 py-1

                                  rounded-lg

                                  bg-purple-500/10
                                  border border-purple-500/20

                                  text-xs sm:text-sm
                                  text-purple-300
                                  "
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <span
                          className="
                          text-xs sm:text-sm
                          text-gray-400
                          "
                        >
                          {phase.progress}
                        </span>
                      </div>

                      {/* PROGRESS BAR */}
                      <div
                        className="
                        w-full h-2

                        rounded-full

                        bg-white/10
                        overflow-hidden
                        "
                      >
                        <div
                          style={{
                            width: phase.progress,
                          }}
                          className="
                          h-full

                          bg-gradient-to-r
                          from-purple-500
                          to-indigo-500
                          "
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapPreviewSection;
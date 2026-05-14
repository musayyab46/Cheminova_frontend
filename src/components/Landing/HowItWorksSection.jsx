import {
  Sparkles,
  BrainCircuit,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    icon: Sparkles,
    title: "Add Your Skills",
    description:
      "Enter your current skills, interests, and learning goals to get started.",
  },
  {
    icon: BrainCircuit,
    title: "AI Generates Roadmap",
    description:
      "Our AI analyzes your skills and creates a personalized learning roadmap.",
  },
  {
    icon: Rocket,
    title: "Learn & Grow",
    description:
      "Follow your roadmap, complete courses, and build projects step-by-step.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 px-5 sm:px-8 lg:px-16">

      {/* HEADER */}
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
          How It{" "}

          <span
            className="
            bg-gradient-to-r
            from-purple-400 to-indigo-400
            bg-clip-text text-transparent
            "
          >
            Works
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
          Generate your personalized learning journey in
          just a few simple steps.
        </p>
      </motion.div>

      {/* STEPS */}
      <div
        className="
        relative
        mt-20
        max-w-6xl mx-auto

        grid
        grid-cols-1
        lg:grid-cols-3
        gap-10
        "
      >

        {/* LINE */}
        <div
          className="
          hidden lg:block

          absolute
          top-20 left-0 right-0

          h-[2px]

          bg-gradient-to-r
          from-purple-500/30
          via-indigo-500/30
          to-purple-500/30
          "
        />

        {steps.map((step, index) => {
          const Icon = step.icon;

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
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
              relative z-10

              rounded-3xl
              border border-white/10

              bg-white/[0.03]
              backdrop-blur-xl

              p-8

              text-center

              hover:border-purple-500/30
              transition-all duration-300
              "
            >

              {/* STEP NUMBER */}
              <div
                className="
                absolute
                -top-5 left-1/2
                -translate-x-1/2

                w-10 h-10
                rounded-full

                bg-gradient-to-r
                from-purple-600
                to-indigo-600

                flex items-center justify-center

                text-white
                font-bold

                shadow-lg shadow-purple-900/30
                "
              >
                {index + 1}
              </div>

              {/* ICON */}
              <div
                className="
                mx-auto

                w-20 h-20
                rounded-3xl

                bg-gradient-to-r
                from-purple-600
                to-indigo-600

                flex items-center justify-center

                shadow-xl shadow-purple-900/30
                "
              >
                <Icon
                  size={36}
                  className="text-white"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-8">

                <h3 className="text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p
                  className="
                  mt-4
                  text-gray-400
                  leading-relaxed
                  "
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;
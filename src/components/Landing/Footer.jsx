import {
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="
      relative

      mt-10

      border-t border-white/10

      bg-white/[0.02]
      backdrop-blur-xl

      px-5 sm:px-8 lg:px-16
      py-14

      overflow-hidden
      "
    >

      {/* Background Glow */}
      <div
        className="
        absolute
        top-0 left-1/2
        -translate-x-1/2

        w-[500px] h-[300px]

        bg-purple-600/10
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        relative
        max-w-7xl mx-auto
        "
      >

        {/* TOP */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4

          gap-10
          "
        >

          {/* BRAND */}
          <div>

            <motion.h2
              whileHover={{
                scale: 1.02,
              }}
              className="
              text-2xl
              font-bold

              bg-gradient-to-r
              from-purple-400
              to-indigo-400

              bg-clip-text
              text-transparent
              "
            >
              LearnPath AI
            </motion.h2>

            <p
              className="
              mt-4

              text-gray-400
              leading-relaxed
              "
            >
              Personalized AI-powered learning roadmaps
              designed to help learners grow faster and
              build real-world skills efficiently.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-6">

              {[Github, Linkedin, Twitter].map(
                (Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    className="
                    w-11 h-11

                    rounded-xl

                    bg-white/5
                    border border-white/10

                    flex items-center justify-center

                    cursor-pointer

                    hover:border-purple-500/30
                    transition-all duration-300
                    "
                  >
                    <Icon
                      size={20}
                      className="text-gray-300"
                    />
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              {[
                "Home",
                "Features",
                "Roadmaps",
                "Courses",
              ].map((item) => (
                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  key={item}
                  className="
                  flex items-center gap-2

                  text-gray-400
                  hover:text-white

                  transition-all duration-300
                  cursor-pointer
                  "
                >
                  <ArrowUpRight size={16} />

                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* RESOURCES */}
          <div>

            <h3 className="text-lg font-semibold text-white">
              Resources
            </h3>

            <div className="mt-5 space-y-3">

              {[
                "Learning Paths",
                "Skill Tracker",
                "Projects",
                "Documentation",
              ].map((item) => (
                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  key={item}
                  className="
                  flex items-center gap-2

                  text-gray-400
                  hover:text-white

                  transition-all duration-300
                  cursor-pointer
                  "
                >
                  <ArrowUpRight size={16} />

                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>

            <h3 className="text-lg font-semibold text-white">
              Stay Updated
            </h3>

            <p
              className="
              mt-4
              text-gray-400
              leading-relaxed
              "
            >
              Get updates about new features,
              learning resources, and AI roadmap
              improvements.
            </p>

            {/* INPUT */}
            <div className="mt-6 flex flex-col gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                w-full

                px-4 py-3
                rounded-xl

                bg-white/5
                border border-white/10

                text-white
                placeholder:text-gray-500

                outline-none

                focus:border-purple-500/40
                transition-all duration-300
                "
              />

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                px-5 py-3

                rounded-xl

                bg-gradient-to-r
                from-purple-600
                to-indigo-600

                font-medium

                shadow-lg shadow-purple-900/30
                "
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
          mt-14
          pt-6

          border-t border-white/10

          flex
          flex-col md:flex-row

          items-center
          justify-between

          gap-4
          "
        >

          <p className="text-gray-500 text-sm">
            © 2026 LearnPath AI. All rights reserved.
          </p>

          <div
            className="
            flex items-center gap-6

            text-sm text-gray-400
            "
          >

            <motion.p
              whileHover={{
                color: "#fff",
              }}
              className="cursor-pointer transition"
            >
              Privacy Policy
            </motion.p>

            <motion.p
              whileHover={{
                color: "#fff",
              }}
              className="cursor-pointer transition"
            >
              Terms of Service
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
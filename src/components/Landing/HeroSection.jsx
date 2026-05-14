// import {
//   Sparkles,
//   ArrowRight,
//   BrainCircuit,
// } from "lucide-react";

// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//     },
//   },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const HeroSection = () => {
//   return (
//     <section className="
// relative
// px-6 lg:px-16
// py-20 lg:py-28
// overflow-hidden
// rounded-[32px]
// border border-white/10
// bg-white/[0.03]
// backdrop-blur-xl
// shadow-2xl
// ">

//       {/* Animated Background Glow */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 6,
//         }}
//         className="
//         absolute top-0 left-0
//         w-72 h-72
//         bg-purple-600/20
//         blur-3xl rounded-full
//         "
//       />

//       <motion.div
//         animate={{
//           scale: [1.2, 1, 1.2],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 7,
//         }}
//         className="
//         absolute bottom-0 right-0
//         w-72 h-72
//         bg-indigo-600/20
//         blur-3xl rounded-full
//         "
//       />

//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         animate="visible"
//         className="
//         relative max-w-7xl mx-auto
//         grid lg:grid-cols-2
//         gap-14 items-center
//         "
//       >

//         {/* LEFT CONTENT */}
//         <motion.div variants={fadeUp}>

//           {/* Badge */}
//           <motion.div
//             variants={fadeUp}
//             whileHover={{ scale: 1.05 }}
//             className="
//             inline-flex items-center gap-2
//             px-4 py-2 rounded-full
//             bg-white/10
//             border border-white/10
//             backdrop-blur-md
//             mb-6
//             "
//           >
//             <Sparkles size={16} className="text-purple-400" />

//             <span className="text-sm text-gray-300">
//               AI Powered Personalized Learning
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             variants={fadeUp}
//             className="
//             text-4xl sm:text-5xl lg:text-7xl
//             font-bold leading-tight
//             "
//           >
//             Build Your
//             <span
//               className="
//               bg-gradient-to-r
//               from-purple-400 to-indigo-400
//               bg-clip-text text-transparent
//               "
//             >
//               {" "}Perfect Learning Path
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             variants={fadeUp}
//             className="
//             mt-6 text-gray-400
//             text-lg leading-relaxed
//             max-w-xl
//             "
//           >
//             Generate personalized roadmaps based on your skills,
//             discover the right courses, and track your journey
//             from beginner to professional with AI guidance.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             variants={fadeUp}
//             className="flex flex-wrap gap-4 mt-8"
//           >

//             {/* Get Started */}
//             <motion.button
//               whileHover={{
//                 scale: 1.05,
//               }}
//               whileTap={{
//                 scale: 0.95,
//               }}
//               className="
//               group px-7 py-4
//               bg-gradient-to-r
//               from-purple-600 to-indigo-600
//               rounded-2xl font-semibold
//               flex items-center gap-2
//               shadow-lg shadow-purple-900/30
//               "
//             >
//               Get Started

//               <ArrowRight
//                 size={18}
//                 className="
//                 group-hover:translate-x-1
//                 transition
//                 "
//               />
//             </motion.button>

//             {/* Login Button */}
//             <motion.button
//               whileHover={{
//                 scale: 1.05,
//               }}
//               whileTap={{
//                 scale: 0.95,
//               }}
//               className="
//               px-7 py-4 rounded-2xl
//               border border-white/10
//               bg-white/5 hover:bg-white/10
//               transition-all duration-300
//               backdrop-blur-md
//               "
//             >
//               Login / Signup
//             </motion.button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             variants={fadeUp}
//             className="flex flex-wrap gap-8 mt-12"
//           >

//             <div>
//               <h3 className="text-3xl font-bold text-white">
//                 10K+
//               </h3>

//               <p className="text-gray-400 text-sm">
//                 Learning Paths Generated
//               </p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-bold text-white">
//                 500+
//               </h3>

//               <p className="text-gray-400 text-sm">
//                 Curated Courses
//               </p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-bold text-white">
//                 AI Based
//               </h3>

//               <p className="text-gray-400 text-sm">
//                 Smart Recommendations
//               </p>
//             </div>

//           </motion.div>
//         </motion.div>

//         {/* RIGHT CONTENT */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             x: 80,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             duration: 0.8,
//           }}
//           className="relative flex justify-center"
//         >

//           {/* Dashboard Card */}
//           <motion.div
//             whileHover={{
//               rotate: 1,
//               scale: 1.01,
//             }}
//             className="
//             relative w-full max-w-lg
//             rounded-3xl
//             border border-white/10
//             bg-white/5
//             backdrop-blur-xl
//             p-6
//             shadow-2xl
//             "
//           >

//             {/* Top */}
//             <div className="flex items-center justify-between mb-6">

//               <div>
//                 <h3 className="font-semibold text-lg">
//                   AI Learning Dashboard
//                 </h3>

//                 <p className="text-sm text-gray-400">
//                   Personalized roadmap generator
//                 </p>
//               </div>

//               <div
//                 className="
//                 w-12 h-12 rounded-2xl
//                 bg-gradient-to-r
//                 from-purple-600 to-indigo-600
//                 flex items-center justify-center
//                 "
//               >
//                 <BrainCircuit />
//               </div>
//             </div>

//             {/* Skills */}
//             <div className="flex flex-wrap gap-3 mb-6">
//               {["React", "Node.js", "MongoDB", "Tailwind"].map(
//                 (skill) => (
//                   <motion.div
//                     whileHover={{
//                       scale: 1.05,
//                     }}
//                     key={skill}
//                     className="
//                     px-4 py-2 rounded-xl
//                     bg-purple-500/10
//                     border border-purple-500/20
//                     text-sm text-purple-300
//                     "
//                   >
//                     {skill}
//                   </motion.div>
//                 )
//               )}
//             </div>

//             {/* Roadmap Steps */}
//             <div className="space-y-4">

//               {[
//                 "Learn JavaScript Fundamentals",
//                 "Master React Ecosystem",
//                 "Build Backend APIs",
//                 "Deploy Full Stack Projects",
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{
//                     opacity: 0,
//                     y: 20,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     delay: index * 0.2,
//                   }}
//                   whileHover={{
//                     scale: 1.03,
//                     x: 5,
//                   }}
//                   className="
//                   p-4 rounded-2xl
//                   bg-white/5
//                   border border-white/10
//                   hover:bg-white/10
//                   transition-all duration-300
//                   "
//                 >
//                   <div className="flex items-center gap-3">

//                     <div
//                       className="
//                       w-8 h-8 rounded-lg
//                       bg-gradient-to-r
//                       from-purple-500 to-indigo-500
//                       flex items-center justify-center
//                       text-sm font-bold
//                       "
//                     >
//                       {index + 1}
//                     </div>

//                     <p className="text-gray-300 text-sm">
//                       {item}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}

//             </div>
//           </motion.div>

//           {/* Floating Card */}
//           <motion.div
//             animate={{
//               y: [0, -10, 0],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 3,
//             }}
//             className="
//             absolute -bottom-8 -left-6
//             hidden lg:block
//             bg-white/10
//             backdrop-blur-xl
//             border border-white/10
//             rounded-2xl p-4
//             shadow-xl
//             "
//           >
//             <p className="text-sm text-gray-300">
//               🚀 Smart AI Recommendations
//             </p>

//             <h4 className="font-semibold mt-1">
//               Courses + Projects + Roadmaps
//             </h4>
//           </motion.div>

//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-[32px]
      border border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      shadow-2xl

      px-5 sm:px-8 lg:px-16
      pt-32 pb-16
      sm:pt-36 sm:pb-20
      lg:pt-40 lg:pb-28
      "
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
        absolute top-0 left-0
        w-64 h-64 sm:w-72 sm:h-72
        bg-purple-600/20
        blur-3xl rounded-full
        "
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="
        absolute bottom-0 right-0
        w-64 h-64 sm:w-72 sm:h-72
        bg-indigo-600/20
        blur-3xl rounded-full
        "
      />

      {/* TOP RIGHT BUTTONS */}
      <div
        className="
        fixed top-5 right-5
        sm:top-6 sm:right-6
        lg:top-8 lg:right-8
        z-50
        flex items-center gap-3
        "
      >

        {/* Signup */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => navigate("/signup")}
          className="
          px-4 py-2 sm:px-5 sm:py-2.5
          rounded-xl
          bg-gradient-to-r
          from-purple-600 to-indigo-600
          text-white
          text-sm sm:text-base
          font-medium
          shadow-lg shadow-purple-900/30
          "
        >
          Login/Signup
        </motion.button>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="
        relative
        max-w-7xl mx-auto
        grid lg:grid-cols-2
        gap-14 lg:gap-20
        items-center
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-white/10
            border border-white/10
            backdrop-blur-md
            mb-6
            "
          >
            <Sparkles
              size={16}
              className="text-purple-400"
            />

            <span className="text-sm text-gray-300">
              AI Powered Personalized Learning
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-bold
            leading-tight
            text-white
            "
          >
            Build Your

            <span
              className="
              bg-gradient-to-r
              from-purple-400 to-indigo-400
              bg-clip-text text-transparent
              "
            >
              {" "}Perfect Learning Path
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="
            mt-6
            text-gray-400
            text-base sm:text-lg
            leading-relaxed
            max-w-xl
            mx-auto lg:mx-0
            "
          >
            Generate personalized roadmaps based on your skills,
            discover the right courses, and track your journey
            from beginner to professional with AI guidance.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div
            variants={fadeUp}
            className="
            flex justify-center lg:justify-start
            mt-8
            "
          >
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => navigate("/signup")}
              className="
              group
              px-7 py-4
              bg-gradient-to-r
              from-purple-600 to-indigo-600
              rounded-2xl
              font-semibold
              flex items-center gap-2
              shadow-lg shadow-purple-900/30
              "
            >
              Get Started

              <ArrowRight
                size={18}
                className="
                group-hover:translate-x-1
                transition
                "
              />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="
            flex flex-wrap
            justify-center lg:justify-start
            gap-8
            mt-12
            "
          >
            <div>
              <h3 className="text-3xl font-bold text-white">
                10K+
              </h3>

              <p className="text-gray-400 text-sm">
                Learning Paths Generated
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                500+
              </h3>

              <p className="text-gray-400 text-sm">
                Curated Courses
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                AI Based
              </h3>

              <p className="text-gray-400 text-sm">
                Smart Recommendations
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          relative
          flex justify-center
          mt-10 lg:mt-0
          "
        >
          {/* Dashboard Card */}
          <motion.div
            whileHover={{
              rotate: 1,
              scale: 1.01,
            }}
            className="
            relative
            w-full max-w-lg

            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl

            p-5 sm:p-6
            shadow-2xl
            "
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-lg text-white">
                  AI Learning Dashboard
                </h3>

                <p className="text-sm text-gray-400">
                  Personalized roadmap generator
                </p>
              </div>

              <div
                className="
                w-12 h-12
                rounded-2xl
                bg-gradient-to-r
                from-purple-600 to-indigo-600
                flex items-center justify-center
                "
              >
                <BrainCircuit />
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Tailwind",
              ].map((skill) => (
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  key={skill}
                  className="
                  px-4 py-2
                  rounded-xl
                  bg-purple-500/10
                  border border-purple-500/20
                  text-sm text-purple-300
                  "
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Roadmap Steps */}
            <div className="space-y-4">
              {[
                "Learn JavaScript Fundamentals",
                "Master React Ecosystem",
                "Build Backend APIs",
                "Deploy Full Stack Projects",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.03,
                    x: 5,
                  }}
                  className="
                  p-4 rounded-2xl
                  bg-white/5
                  border border-white/10
                  hover:bg-white/10
                  transition-all duration-300
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                      w-8 h-8
                      rounded-lg
                      bg-gradient-to-r
                      from-purple-500 to-indigo-500
                      flex items-center justify-center
                      text-sm font-bold
                      "
                    >
                      {index + 1}
                    </div>

                    <p className="text-gray-300 text-sm">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
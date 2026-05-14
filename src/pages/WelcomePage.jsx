import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { motion } from "framer-motion";

import HeroSection from "../components/Landing/HeroSection";
import FeaturesSection from "../components/Landing/FeaturesSection";
import HowItWorksSection from "../components/Landing/HowItWorksSection";
import RoadmapPreviewSection from "../components/Landing/RoadmapPreviewSection";
import Footer from "../components/Landing/Footer";
import AuthModal from "../components/Landing/AuthModal";

const WelcomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // AUTH MODAL STATE
  const [openAuth, setOpenAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // OPEN MODAL BASED ON ROUTE
  useEffect(() => {

    if (location.pathname === "/login") {
      setOpenAuth(true);
      setIsLogin(true);
    }

    else if (location.pathname === "/signup") {
      setOpenAuth(true);
      setIsLogin(false);
    }

    else {
      setOpenAuth(false);
    }

  }, [location.pathname]);

  return (
    <div className="min-h-screen  p-3 sm:p-4 lg:p-5">

      {/* MAIN CONTAINER */}
      <div
        className="
        relative
        min-h-screen

        overflow-hidden
        isolate

        rounded-[32px]

        border border-white/10

        bg-gradient-to-br
        from-[#0B1120]
        via-[#111827]
        to-[#1E1B4B]

        shadow-2xl
        "
      >

        {/* FLOATING LOGIN BUTTON */}
        <div
          className="
          absolute
          top-5 right-5

          sm:top-6 sm:right-6
          lg:top-8 lg:right-8

          z-[100]
          "
        >

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => {
  setOpenAuth(true);
  setIsLogin(true);
}}
            className="
            px-5 py-2.5

            rounded-xl

            bg-gradient-to-r
            from-purple-600
            to-indigo-600

            text-white
            text-sm sm:text-base
            font-medium

            shadow-lg shadow-purple-900/30

            hover:shadow-purple-700/40
            transition-all duration-300
            "
          >
            Login / Signup
          </motion.button>
        </div>

        {/* LANDING PAGE SECTIONS */}
        <HeroSection />

        <FeaturesSection />

        <HowItWorksSection />

        <RoadmapPreviewSection />

        <Footer />

        {/* AUTH MODAL */}
        <AuthModal
          open={openAuth}
          setOpen={setOpenAuth}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      </div>
    </div>
  );
};

export default WelcomePage;
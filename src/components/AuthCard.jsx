import React from "react";
import Lottie from "lottie-react";
import Background from "../assets/Background.json";

const AuthCard = ({
  title,
  subtitle,
  fields,
  buttonText,
  footerText,
  footerLinkText,
  onSubmit,
  switchAuth,
}) => {
  return (
    <div className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden md:px-6">

      {/* 🌌 DESKTOP BACKGROUND ANIMATION */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
        <Lottie
          animationData={Background}
          loop
          className="w-full h-full object-cover scale-150"
        />
      </div>

      {/* 📱 MOBILE CLEAN BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-purple-500 md:hidden"></div>

      {/* 🌈 LIGHT OVERLAY (for desktop only) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 hidden md:block z-0"></div>

      {/* 📦 MAIN CARD */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">

        {/* LEFT PANEL (Desktop only) */}
        <div className="hidden md:flex md:w-1/3 bg-gradient-to-b from-blue-500 to-purple-500 p-8 flex-col justify-center text-white">
          <h1 className="text-3xl font-bold mb-6">Cheminova</h1>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 opacity-90">{subtitle}</p>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-2/3 p-5 sm:p-6 md:p-10 flex items-center justify-center">

          <div className="bg-white/95 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl w-full">

            {/* 📱 MOBILE HEADER */}
            <div className="md:hidden text-center mb-5">
              <h1 className="text-xl font-bold text-white">Cheminova</h1>
              <p className="text-white/80 text-sm">{subtitle}</p>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-5 text-center text-gray-800">
              {title}
            </h2>

            <form onSubmit={onSubmit} className="space-y-4">
              {fields.map((field, index) => (
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={field.onChange}
                  className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                />
              ))}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
              >
                {buttonText}
              </button>
            </form>

            <p className="text-center text-gray-500 mt-5 text-sm sm:text-base">
              {footerText}{" "}
              <span
                className="text-purple-600 cursor-pointer font-semibold hover:underline"
                onClick={switchAuth}
              >
                {footerLinkText}
              </span>
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthCard;
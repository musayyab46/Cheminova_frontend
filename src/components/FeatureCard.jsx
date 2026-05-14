import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition w-full max-w-xs">
      <div className="text-purple-600 mb-4 text-5xl">
        <Icon />
      </div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;

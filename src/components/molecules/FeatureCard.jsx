import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card text-left">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="32" fill="#F8F9FD" />
        <path d={icon} fill="#19191C" />
      </svg>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="font-medium text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;

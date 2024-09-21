import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card text-left">
      <img className="h-11" src={icon} alt="feature"></img>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="font-medium text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;

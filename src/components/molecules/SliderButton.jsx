import React from "react";

const SliderButton = ({ label, icon, className }) => (
  <button
    type="button"
    className={`${className} font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 flex items-center justify-center`}
    aria-current="page"
  >
    {label}
    {icon && (
      <span className="ml-4 w-6 h-6 bg-white rounded-full flex items-center justify-center">
        <img src={icon} alt="Free Trial" />
      </span>
    )}
  </button>
);
export default SliderButton;

import React from "react";

export const Testimonial = ({
  text,
  author,
  position,
  image,
  fontSize = "text-base",
  color = "text-gray-900",
  background = "#F1FAEB",
}) => (
  <section className="bg-gray-50 mb-8">
    <div
      className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded-2xl"
      style={{ background: background }}
    >
      <figure className="max-w-screen-md mx-auto">
        <blockquote>
          <p className={`font-medium ${fontSize} ${color} text-left`}>{text}</p>
        </blockquote>
        <figcaption className="flex r mt-6 space-x-3 text-left">
          <img
            className="w-8 h-8 rounded-full"
            src={image}
            alt="testimonial icon"
          />
          <div>
            <div className={`pr-3 font-bold text-gray-900`}>{author}</div>
            <div className="pl-px text-sm font-medium text-gray-400">
              {position}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
);

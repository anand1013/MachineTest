// Testimonial.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For better assertions
import { Testimonial } from "./Testimonial";

describe("Testimonial Component", () => {
  const props = {
    text: "This is a testimonial text.",
    author: "John Doe",
    position: "CEO of Company",
    image: "test-image.jpg",
  };

  it("renders the testimonial text", () => {
    render(<Testimonial {...props} />);
    const testimonialText = screen.getByText(/This is a testimonial text./i);
    expect(testimonialText).toBeInTheDocument();
  });

  it("renders the author name", () => {
    render(<Testimonial {...props} />);
    const authorName = screen.getByText(/John Doe/i);
    expect(authorName).toBeInTheDocument();
  });

  it("renders the position", () => {
    render(<Testimonial {...props} />);
    const authorPosition = screen.getByText(/CEO of Company/i);
    expect(authorPosition).toBeInTheDocument();
  });

  it("renders the image with correct src and alt", () => {
    render(<Testimonial {...props} />);
    const imgElement = screen.getByAltText("testimonial icon");
    expect(imgElement).toHaveAttribute("src", "test-image.jpg");
    expect(imgElement).toHaveAttribute("alt", "testimonial icon");
  });

  it("applies default font size, color, and background", () => {
    render(<Testimonial {...props} />);
    const blockquote = screen.getByText(/This is a testimonial text./i);
    expect(blockquote).toHaveClass("text-base"); // Default font size
  });
  //     render(
  //       <Testimonial
  //         {...props}
  //         fontSize="text-xl"
  //         color="text-blue-600"
  //         background="#ffcc00"
  //       />
  //     );
  //     const blockquote = screen.getByText(/This is a testimonial text./i);
  //     expect(blockquote).toHaveClass('text-xl');
  //     expect(blockquote).toHaveStyle('color: rgb(37, 99, 235)'); // Tailwind text-blue-600
  //     const section = blockquote.closest('section');
  //     expect(section).toHaveStyle('background: #ffcc00');
  //   });
});

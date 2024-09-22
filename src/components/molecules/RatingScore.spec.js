// RatingScore.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RatingScore from "./RatingScore";
import { STAR_IMAGE_URL } from "../../assets.js";

describe("RatingScore Component", () => {
  it("renders the rating score correctly", () => {
    const rating = 4.5;
    render(<RatingScore rating={rating} />);

    // Check that the rating is displayed
    const ratingElement = screen.getByText(rating.toString());
    expect(ratingElement).toBeInTheDocument();
    expect(ratingElement).toHaveTextContent("4.5");
  });

  it("renders the star image with correct src and alt attributes", () => {
    render(<RatingScore rating={4.5} />);

    // Check that the star image is rendered with the correct src and alt
    const imgElement = screen.getByAltText("rating star");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", STAR_IMAGE_URL);
    expect(imgElement).toHaveAttribute("alt", "rating star");
  });

  it("applies the correct classnames to elements", () => {
    render(<RatingScore rating={5} />);

    // Check that the image has the correct classnames
    const imgElement = screen.getByAltText("rating star");
    expect(imgElement).toHaveClass("w-8 h-8 rounded-full");

    // Check that the rating text has the correct classnames
    const ratingElement = screen.getByText("5");
    expect(ratingElement).toHaveClass("pr-3 font-bold text-6xl text-gray-900");
  });
});

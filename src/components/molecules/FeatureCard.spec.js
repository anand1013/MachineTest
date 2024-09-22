import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FeatureCard from "./FeatureCard";

describe("FeatureCard component", () => {
  const icon = "/path/to/icon.svg";
  const title = "Test Title";
  const description = "Test Description";

  it("renders the icon, title, and description", () => {
    render(<FeatureCard icon={icon} title={title} description={description} />);

    const imgElement = screen.getByRole("img");
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);

    expect(imgElement).toHaveAttribute("src", icon);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});

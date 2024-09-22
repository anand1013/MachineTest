// SliderButton.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SliderButton from "./SliderButton";

describe("SliderButton Component", () => {
  const label = "Free Trial";
  const icon = "test-icon.jpg";

  it("renders the button with the correct label", () => {
    render(<SliderButton label={label} />);

    // Check that the label is rendered
    const buttonLabel = screen.getByText(label);
    expect(buttonLabel).toBeInTheDocument();
  });

  it("renders the button without an icon if icon prop is not passed", () => {
    render(<SliderButton label={label} />);

    // Check that no icon is rendered
    const imgElement = screen.queryByAltText(/Free Trial/i);
    expect(imgElement).toBeNull();
  });

  it("renders the button with an icon if icon prop is passed", () => {
    render(<SliderButton label={label} icon={icon} />);

    // Check that the icon is rendered
    const imgElement = screen.getByAltText(/Free Trial/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", icon);
  });

  it("applies the correct classnames", () => {
    const customClassName = "bg-blue-500";
    render(<SliderButton label={label} className={customClassName} />);

    // Check that the button has the custom class applied
    const buttonElement = screen.getByRole("button", { name: label });
    expect(buttonElement).toHaveClass(customClassName);
  });

  it("has the correct default button styles", () => {
    render(<SliderButton label={label} />);

    const buttonElement = screen.getByRole("button", { name: label });

    // Check that the default classes are applied
    expect(buttonElement).toHaveClass("font-medium");
    expect(buttonElement).toHaveClass("rounded-full");
    expect(buttonElement).toHaveClass("text-sm");
    expect(buttonElement).toHaveClass("flex");
    expect(buttonElement).toHaveClass("items-center");
    expect(buttonElement).toHaveClass("justify-center");
  });
});

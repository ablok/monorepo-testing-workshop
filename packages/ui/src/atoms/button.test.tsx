import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

it("renders heading", () => {
  render(<Button text="Hello" />);
  const button = screen.getByText(/Hello/i);
  expect(button).not.toBeNull();
});
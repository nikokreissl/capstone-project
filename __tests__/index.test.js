import Home from "../pages";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Home />);
  const element = screen.getByRole("heading", {
    name: /FIFA23 Tracker/,
  });
  expect(element).toBeInTheDocument();
});

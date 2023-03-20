import Home from "../pages";
import { render, screen } from "@testing-library/react";

test("Shows headline with the title FIFA23 Tracker", () => {
  render(<Home />);
  const element = screen.getByRole("heading", {
    name: /FIFA23 Tracker/,
  });
  expect(element).toBeInTheDocument();
});

import Home from "../pages";
import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import { DataContext } from "../pages/_app";

test("Shows headline with the title FIFA23 Tracker", () => {
  const { competitions } = useContext(DataContext);
  render(
    <DataContext.Provider value={competitions}>
      <Home />
    </DataContext.Provider>
  );
  const element = screen.getByRole("heading", {
    name: /FIFA23 Tracker/,
  });
  expect(element).toBeInTheDocument();
});

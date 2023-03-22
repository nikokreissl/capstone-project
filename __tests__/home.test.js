import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { DataContext } from "../pages/_app";

test("Should render as many competition cards as entries are given in competitions", () => {
  const competitions = [
    { id: 1, name: "Test Competition #1", gamesPlayed: [] },
    { id: 2, name: "Test Competition #2", gamesPlayed: [] },
  ];
  render(
    <DataContext.Provider value={{ competitions }}>
      <Home />
    </DataContext.Provider>
  );
  const competitionOne = screen.getByRole("heading", {
    name: "Test Competition #1",
  });
  const competitionTwo = screen.getByRole("heading", {
    name: "Test Competition #2",
  });

  expect(competitionOne).toBeInTheDocument();
  expect(competitionTwo).toBeInTheDocument();
});

import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/index";
import { DataContext } from "../pages/_app";

test("should render heading and create competition link when competitions are present", async () => {
  const competitions = [{ id: 1, name: "Test Competition", gamesPlayed: [] }];
  render(
    <DataContext.Provider value={{ competitions }}>
      <Home />
    </DataContext.Provider>
  );
  expect(screen.getByText("Create new competition")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Test Competition" })
  ).toBeInTheDocument();
});

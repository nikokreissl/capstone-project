import { render, screen } from "@testing-library/react";
import CompetitionDetail from ".";

describe("CompetitionDetail Component", () => {
  const competition = {
    id: 1,
    name: "Competition Name",
    totalGames: 12,
    gamesPlayed: [
      {
        gameId: 1,
        userScore: 1,
        opponentScore: 0,
      },
      {
        gameId: 2,
        userScore: 2,
        opponentScore: 0,
      },
      {
        gameId: 3,
        userScore: 0,
        opponentScore: 1,
      },
    ],
  };
  test("Renders buttons and links correctly", () => {
    render(
      <CompetitionDetail competition={competition} path="competition/1" />
    );

    const links = screen.getAllByRole("link");
    const button = screen.getAllByRole("button");

    expect(links.length).toBe(5);
    expect(button.length).toBe(1);
  });

  test("Renders Competition details correctly", () => {
    render(
      <CompetitionDetail competition={competition} path="competition/1" />
    );

    const competitionName = screen.getByRole("heading", {
      name: "Competition details",
    });

    const wins = screen.getByText("2");
    const loses = screen.getByText("1");

    const remainingGames = screen.getByText("9");

    expect(wins).toBeInTheDocument();
    expect(loses).toBeInTheDocument();
    expect(competitionName).toBeInTheDocument();
    expect(remainingGames).toBeInTheDocument();
  });

  test("Renders correct number of games", () => {
    render(
      <CompetitionDetail competition={competition} path="competition/1" />
    );

    const games = screen.getAllByRole("listitem");
    expect(games.length).toBe(6);
  });
});

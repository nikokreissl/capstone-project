import { render, screen } from "@testing-library/react";
import GameOverviewComponent from ".";

describe("GameOverviewComponent", () => {
  test(`Renders empty state if "gamesPlayed" array is empty`, () => {
    render(<GameOverviewComponent games={[]} />);

    const emptyState = screen.getByText("No games played yet");

    expect(emptyState).toBeInTheDocument();
  });

  test(`Renders last five games`, () => {
    const games = [
      {
        gameId: "dsdsf",
        userScore: 1,
        opponentScore: 0,
        userXgoals: 1.1,
        opponentXgoals: 0.9,
      },
      {
        gameId: "fssdffdsfds",
        userScore: 0,
        opponentScore: 2,
        userXgoals: 0.9,
        opponentXgoals: 1.7,
      },
      {
        gameId: "wseghhhsgsdg",
        userScore: 4,
        opponentScore: 2,
        userXgoals: 2.9,
        opponentXgoals: 1.8,
      },
      {
        gameId: "wsegsgsdg",
        userScore: 4,
        opponentScore: 0,
        userXgoals: 2.9,
        opponentXgoals: 1.8,
      },
      {
        gameId: "sdgsgsdg",
        userScore: 0,
        opponentScore: 2,
        userXgoals: 2.9,
        opponentXgoals: 1.8,
      },
      {
        gameId: "wsegwqweewewsgsdg",
        userScore: 2,
        opponentScore: 0,
        userXgoals: 2.9,
        opponentXgoals: 1.8,
      },
    ];
    render(<GameOverviewComponent games={games} />);

    const gamesListItems = screen.getAllByRole("listitem");

    expect(gamesListItems.length).toBe(5);
  });
});

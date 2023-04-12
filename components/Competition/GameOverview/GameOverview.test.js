import { render, screen } from "@testing-library/react";
import GameOverviewComponent from ".";

describe("GameOverviewComponent", () => {
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
      gameId: "wsegsgsdg",
      userScore: 4,
      opponentScore: 2,
      userXgoals: 2.9,
      opponentXgoals: 1.8,
    },
  ];

  test(`Renders empty state if "gamesPlayes" array is empty`, () => {
    render(<GameOverviewComponent games={[]} />);

    const emptyState = screen.getByText("No games playes yet");

    expect(emptyState).toBeInTheDocument();
  });
});

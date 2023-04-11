import { render, screen } from "@testing-library/react";
import CompetitionCard from ".";

test("Renders information on Card correcty", () => {
  const competition = {
    id: 1,
    name: "Competition Name",
    totalGames: 12,
    gamesPlayed: [
      {
        userScore: 1,
        opponentScore: 0,
      },
      {
        userScore: 2,
        opponentScore: 0,
      },
      {
        userScore: 0,
        opponentScore: 1,
      },
    ],
  };
  render(<CompetitionCard competition={competition} />);

  const competitionName = screen.getByRole("heading", {
    name: "Competition Name",
  });

  const wins = screen.getByText("2");
  const loses = screen.getByText("1");

  const remainingGames = screen.getByText("9");

  expect(wins).toBeInTheDocument();
  expect(loses).toBeInTheDocument();
  expect(competitionName).toBeInTheDocument();
  expect(remainingGames).toBeInTheDocument();
});

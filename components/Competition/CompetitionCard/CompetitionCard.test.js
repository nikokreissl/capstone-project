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

  const record = screen.getByText("Record: Wins 2 / Loses 1");

  const remainingGames = screen.getByText("Remaining Games: 9");

  expect(record).toBeInTheDocument();
  expect(competitionName).toBeInTheDocument();
  expect(remainingGames).toBeInTheDocument();
});

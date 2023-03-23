import Link from "next/link";
import { StyledArticle, StyledDetailsLink } from "./StyledCompetitionCard.js";

export default function CompetitionCard({ competition }) {
  if (!competition) {
    return <p>Loading...</p>;
  }

  const competitionWins = competition?.gamesPlayed.filter(
    (game) => game.userScore > game.opponentScore
  );

  const competitionLoses = competition.gamesPlayed.filter(
    (game) => game.userScore < game.opponentScore
  );
  return (
    <StyledArticle>
      <h3>{competition.name}</h3>
      <p>
        Record: Wins {competitionWins.length} / Loses {competitionLoses.length}
      </p>
      <p>
        Remaining Games:{" "}
        {competition?.totalGames - competition.gamesPlayed.length}
      </p>
      <StyledDetailsLink href={`/competition/${competition.id}`}>
        View Details
      </StyledDetailsLink>
    </StyledArticle>
  );
}

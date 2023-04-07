import { StyledArticle, StyledDetailsLink } from "./StyledCompetitionCard.js";
import { StyledLinkComponent } from "../../GeneralComponents/Links/index.js";
export default function CompetitionCard({ competition, path }) {
  if (!competition) {
    return <p>Loading...</p>;
  }

  const competitionWins = competition.gamesPlayed.filter(
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
      <StyledLinkComponent
        href={`/competition/${competition.id}/?${path}`}
        type="view"
      >
        View More
      </StyledLinkComponent>
    </StyledArticle>
  );
}

import { StyledLinkComponent } from "../../GeneralComponents/Links";
import {
  StyledContainer,
  StyledHeadline,
  StyledParagraph,
} from "../../GeneralComponents/Cards";

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
    <StyledContainer>
      <StyledHeadline>{competition.name}</StyledHeadline>
      <StyledParagraph>
        Wins <strong>{competitionWins.length} </strong> - Loses{" "}
        <strong>{competitionLoses.length}</strong>
      </StyledParagraph>
      <StyledParagraph>
        Remaining games:{" "}
        <strong>
          {competition.totalGames - competition.gamesPlayed.length}
        </strong>
      </StyledParagraph>
      <StyledLinkComponent
        href={`/competition/${competition.id}/?${path}`}
        type="view"
      >
        View More
      </StyledLinkComponent>
    </StyledContainer>
  );
}

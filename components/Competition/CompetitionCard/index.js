import styled from "styled-components";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { StyledContainer, StyledHeadline } from "../../GeneralComponents/Cards";
import GameOverviewComponent from "../GameOverview";

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
      <StyledWinsDefeatsContainer>
        <StyledWinsDefeatsFrame>
          <h4>Wins</h4>
          <StyledWinsDefeatsNumber>
            {competitionWins.length}
          </StyledWinsDefeatsNumber>
        </StyledWinsDefeatsFrame>
        <StyledWinsDefeatsFrame>
          <h4>Defeats</h4>
          <StyledWinsDefeatsNumber>
            {competitionLoses.length}
          </StyledWinsDefeatsNumber>
        </StyledWinsDefeatsFrame>
        <StyledWinsDefeatsFrame>
          <h4>Remaining games</h4>
          <StyledWinsDefeatsNumber>
            {competition.totalGames - competition.gamesPlayed.length}
          </StyledWinsDefeatsNumber>
        </StyledWinsDefeatsFrame>
      </StyledWinsDefeatsContainer>
      <GameOverviewComponent games={competition.gamesPlayed} />
      <StyledLinkComponent
        href={`/competition/${competition.id}/?${path}`}
        type="view"
      >
        View More
      </StyledLinkComponent>
    </StyledContainer>
  );
}

export const StyledWinsDefeatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 10px 0 10px;
`;

export const StyledWinsDefeatsFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const StyledWinsDefeatsNumber = styled.p`
  font-weight: bold;
  color: var(--orange);
  font-size: 1.2rem;
`;

import styled from "styled-components";
import { StyledParagraph } from "../../GeneralComponents/Cards";

export default function GameOverviewComponent({ games }) {
  const lastFiveGames = games
    .filter((game) => games.indexOf(game) >= games.length - 5)
    .sort((a, b) => {
      const indexA = games.indexOf(a);
      const indexB = games.indexOf(b);
      if (indexA > indexB) {
        return -1;
      } else if (indexA < indexB) {
        return 1;
      }
    });

  return (
    <StyledGameOverviewContainer>
      <h4>Last game(s)</h4>
      {lastFiveGames.length < 1 ? (
        <StyledGameOverviewEmptyState>
          No games played yet
        </StyledGameOverviewEmptyState>
      ) : (
        <StyledGameOverviewFramesWrapper>
          {lastFiveGames.map((game) => (
            <StyledGameBlock
              key={game.gameId}
              opponentScore={game.opponentScore}
              userScore={game.userScore}
            >
              {game.userScore > game.opponentScore ? "W" : "L"}
            </StyledGameBlock>
          ))}
        </StyledGameOverviewFramesWrapper>
      )}
    </StyledGameOverviewContainer>
  );
}

const StyledGameOverviewContainer = styled.div`
  margin: 10px 20px 0 20px;
`;

const StyledGameOverviewFramesWrapper = styled.ul`
  padding: 10px;
  display: flex;
  gap: 10px;
  list-style: none;
`;

const StyledGameOverviewEmptyState = styled.p`
  padding: 10px;
  font-style: italic;
  color: var(--light-gray);
`;

const StyledGameBlock = styled.li`
  border-radius: 3px;
  background-color: ${({ opponentScore, userScore }) =>
    userScore > opponentScore ? "green" : "red"};
  height: 30px;
  width: 30px;
  border: 1px solid var(--light-gray);
  color: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
`;

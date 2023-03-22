import {
  StyledButtonWrapper,
  StyledButton,
} from "../../GeneralComponents/Buttons/StyledButton";
import {
  StyledDetailContainer,
  StyledFieldset,
  StyledNumberInput,
  StyledGameForm,
  StyledGameButton,
} from "./StyledGameDetail.js";
import { useState } from "react";

export default function GameDetail({
  game,
  onClickBack,
  onUpdateGame,
  competitionId,
}) {
  const [userScore, setUserScore] = useState(game.userScore);
  const [opponentScore, setOpponentScore] = useState(game.opponentScore);
  const [userXgoals, setUserXgoals] = useState(game.userXgoals);
  const [opponentXgoals, setOpponentXgoals] = useState(game.opponentXgoals);

  function handleUserScoreChange(event) {
    setUserScore(Number(event.target.value));
  }

  function handleOpponentScoreChange(event) {
    setOpponentScore(Number(event.target.value));
  }

  function handleUserXgoalsChange(event) {
    setUserXgoals(Number(event.target.value));
  }

  function handleOpponentXgoalsChange(event) {
    setOpponentXgoals(Number(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newGame = {
      userScore,
      opponentScore,
      opponentXgoals,
      userXgoals,
    };
    onUpdateGame(competitionId, game.gameId, newGame);
  }

  return (
    <main>
      <StyledDetailContainer>
        <StyledButtonWrapper>
          <StyledButton onClick={onClickBack}>🔙 Back</StyledButton>
          <StyledButton>❌ Delete</StyledButton>
        </StyledButtonWrapper>
        <h2>Game {game.gameId}</h2>
        <StyledGameForm onSubmit={handleSubmit}>
          <StyledFieldset>
            <legend>Score</legend>
            <label htmlFor="user-score">Yours</label>
            <StyledNumberInput
              type="number"
              name="user-score"
              id="user-score"
              value={userScore}
              min={0}
              onChange={handleUserScoreChange}
            />
            :
            <StyledNumberInput
              type="number"
              name="opponent-score"
              id="opponent-score"
              min={0}
              value={opponentScore}
              onChange={handleOpponentScoreChange}
            />
            <label htmlFor="opponent-score">Opponent</label>
          </StyledFieldset>
          <StyledFieldset>
            <legend>xGoals</legend>
            <label htmlFor="user-xgoals">Yours</label>
            <StyledNumberInput
              type="number"
              name="user-xgoals"
              id="user-xgoals"
              pattern="[0-9]+([\.][0-9]+)?"
              step={0.1}
              min={0}
              value={userXgoals}
              onChange={handleUserXgoalsChange}
            />
            <StyledNumberInput
              type="number"
              name="opponent-xgoals"
              id="opponent-xgoals"
              pattern="[0-9]+([\.][0-9]+)?"
              step={0.1}
              min={0}
              value={opponentXgoals}
              onChange={handleOpponentXgoalsChange}
            />
            <label htmlFor="opponent-xgoals">Opponent</label>
          </StyledFieldset>
          <StyledGameButton>Save / Update</StyledGameButton>
        </StyledGameForm>
      </StyledDetailContainer>
    </main>
  );
}

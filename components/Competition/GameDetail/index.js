import {
  StyledButtonWrapper,
  StyledButton,
} from "../../GeneralComponents/Buttons/StyledButton";
import { StyledDetailContainer } from "./StyledGameDetail.js";
import { useState } from "react";
import EditScoreComponent from "./StyledGameDetail.js";

export default function GameDetail({
  game,
  onClickBack,
  onUpdateGame,
  competitionId,
  onDeleteGame,
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
    if (userScore === opponentScore) {
      alert("You can not enter draws!");
    } else {
      onUpdateGame(competitionId, game.gameId, newGame);
      onClickBack();
    }
  }

  function handleDeleteGame() {
    onClickBack();
    onDeleteGame(competitionId, game.gameId);
  }

  return (
    <main>
      <StyledDetailContainer>
        <StyledButtonWrapper>
          <StyledButton onClick={onClickBack}>🔙 Back</StyledButton>
          <StyledButton onClick={handleDeleteGame}>❌ Delete</StyledButton>
        </StyledButtonWrapper>
        <h2>Game {game.gameId}</h2>
        <EditScoreComponent />
      </StyledDetailContainer>
    </main>
  );
}

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
  const [updateValue, setUpdateValue] = useState(1);

  function handleScoreChange(player, operation) {
    if (player === "user") {
      if (operation === "increment") {
        setUserScore(userScore + 1);
      } else if (operation === "decrement") {
        setUserScore(userScore - 1);
      }
    } else if (player === "opponent") {
      if (operation === "increment") {
        setOpponentScore(opponentScore + 1);
      } else if (operation === "decrement") {
        setOpponentScore(opponentScore - 1);
      }
    }
  }

  function handleXgoalsChange(player, operation, value) {
    if (player === "user") {
      if (operation === "increment") {
        setUserXgoals(parseFloat((userXgoals + value).toFixed(1)));
      } else if (operation === "decrement") {
        setUserXgoals(parseFloat((userXgoals - value).toFixed(1)));
      }
    } else if (player === "opponent") {
      if (operation === "increment") {
        setOpponentXgoals(parseFloat((opponentXgoals + value).toFixed(1)));
      } else if (operation === "decrement") {
        setOpponentXgoals(parseFloat((opponentXgoals - value).toFixed(1)));
      }
    }
  }

  function updateXgoalsValue() {
    if (updateValue === 1) {
      setUpdateValue(0.1);
    } else {
      setUpdateValue(1);
    }
  }

  function handleSubmit() {
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
        <EditScoreComponent
          headline="Score"
          userCount={userScore}
          opponentCount={opponentScore}
          onValueUpdate={handleScoreChange}
          value={1}
        />
        <EditScoreComponent
          headline="xGoals"
          userCount={userXgoals}
          opponentCount={opponentXgoals}
          onValueUpdate={handleXgoalsChange}
          value={updateValue}
        />
        <p>Change xGoals update value to:</p>
        <button onClick={updateXgoalsValue}>
          {updateValue === 1 ? "0.1" : "1"}
        </button>
      </StyledDetailContainer>
      <button onClick={handleSubmit}>Update</button>
    </main>
  );
}

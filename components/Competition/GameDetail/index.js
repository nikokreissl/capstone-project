import { StyledButtonComponent } from "../../GeneralComponents/Buttons/index.js";
import { StyledDetailContainer } from "./StyledGameDetail.js";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { useState } from "react";
import EditScoreComponent from "./StyledGameDetail.js";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation/index.js";

export default function GameDetail({
  game,
  gameNumber,
  onUpdateGame,
  competitionId,
  onDeleteGame,
  onRedirectBack,
  path,
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
    onUpdateGame(competitionId, game.gameId, newGame);
    onRedirectBack();
  }

  function handleDeleteGame() {
    onDeleteGame(competitionId, game.gameId);
    onRedirectBack();
  }

  return (
    <>
      <StyledDetailContainer>
        <StyledLinkComponent
          href={
            path.includes("archive")
              ? `/competition/${competitionId}/?archive`
              : `/competition/${competitionId}`
          }
          type="back"
        >
          Back
        </StyledLinkComponent>
        <StyledButtonComponent type="delete" callback={handleDeleteGame}>
          Delete
        </StyledButtonComponent>
        <PageHeadlineComponent>Edit game {gameNumber}</PageHeadlineComponent>
        <StyledPageDescription>
          Update your and your opponents <strong>score</strong> and{" "}
          <strong>xGoals</strong> or delete the games.
        </StyledPageDescription>
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
        <button type="submit" onClick={updateXgoalsValue}>
          {updateValue === 1 ? "0.1" : "1"}
        </button>
      </StyledDetailContainer>
      <StyledButtonComponent
        type="update"
        callback={handleSubmit}
        disabled={userScore === opponentScore ? true : false}
      >
        Update
      </StyledButtonComponent>
    </>
  );
}

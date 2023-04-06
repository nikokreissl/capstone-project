import { StyledLinkComponent } from "../../../components/GeneralComponents/Links/index.js";
import { StyledButtonComponent } from "../../../components/GeneralComponents/Buttons/index.js";
import EditScoreComponent, {
  StyledDetailContainer,
} from "../../../components/Competition/GameDetail/StyledGameDetail";
import { useState } from "react";
import { DataContext } from "../../_app.js";
import { useContext } from "react";
import { useRouter } from "next/router.js";

export default function TrackNewGamePage() {
  const router = useRouter();
  const path = router.asPath;
  const { competitionId } = router.query;

  const { handleTrackNewGame } = useContext(DataContext);

  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [userXgoals, setUserXgoals] = useState(0.0);
  const [opponentXgoals, setOpponentXgoals] = useState(0.0);
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
      handleTrackNewGame(competitionId, newGame);
      if (path.includes("archive")) {
        router.push(`/competition/${competitionId}/?archive`);
      } else {
        router.push(`/competition/${competitionId}`);
      }
    }
  }

  return (
    <main>
      <StyledDetailContainer>
        <StyledLinkComponent
          href={
            path.includes("archive")
              ? `/competition/${competitionId}/?archive`
              : `/competition/${competitionId}`
          }
          type="back"
        >
          Cancel
        </StyledLinkComponent>
        <h2>Track new game</h2>
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
      <StyledButtonComponent type="add" callback={handleSubmit}>
        Save
      </StyledButtonComponent>
    </main>
  );
}

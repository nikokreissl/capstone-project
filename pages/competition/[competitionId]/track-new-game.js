import {
  StyledButtonWrapper,
  StyledButton,
} from "../../../components/GeneralComponents/Buttons/StyledButton.js";
import {
  StyledDetailContainer,
  StyledFieldset,
  StyledNumberInput,
  StyledGameForm,
  StyledGameButton,
} from "../../../components/Competition/GameDetail/StyledGameDetail";
import { useState } from "react";
import { DataContext } from "../../_app.js";
import { useContext } from "react";
import { useRouter } from "next/router.js";

export default function TrackNewGamePage() {
  const router = useRouter();
  const { competitionId } = router.query;

  const { handleTrackNewGame } = useContext(DataContext);

  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [userXgoals, setUserXgoals] = useState(0.0);
  const [opponentXgoals, setOpponentXgoals] = useState(0.0);

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
    handleTrackNewGame(competitionId, newGame);
    router.push(`/competition/${competitionId}`);
  }

  return (
    <main>
      <StyledDetailContainer>
        <StyledButtonWrapper>
          <StyledButton
            onClick={() => router.push(`/competition/${competitionId}`)}
          >
            🔙 Cancel
          </StyledButton>
        </StyledButtonWrapper>
        <h2>Track new Game</h2>
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
          <StyledGameButton>Save</StyledGameButton>
        </StyledGameForm>
      </StyledDetailContainer>
    </main>
  );
}

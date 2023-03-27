import { useRouter } from "next/router";
import {
  StyledDetailContainer,
  StyledNumberInput,
  StyledGameForm,
  StyledGameButton,
  StyledTimesWrapper,
} from "../../../components/Competition/GameDetail/StyledGameDetail";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../../components/GeneralComponents/Buttons/StyledButton";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../_app";

export default function AddChallengePage() {
  const router = useRouter();
  const { objectiveId } = router.query;

  const { handleAddChallenge } = useContext(DataContext);

  const [challengeDescription, setChallengeDescription] = useState("");
  const [challengeTimesNeeded, setChallengechallengeTimesNeeded] = useState(0);
  const [challengeTimesCompleted, setChallengeTimesCompleted] = useState(0);

  function handleDescriptionInput(event) {
    setChallengeDescription(event.target.value);
  }

  function handleTimesNeededInput(event) {
    setChallengechallengeTimesNeeded(Number(event.target.value));
  }

  function handleTimesCompletedInput(event) {
    setChallengeTimesCompleted(Number(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challengeDetails = {
      description: challengeDescription,
      timesNeeded: challengeTimesNeeded,
      timesCompleted: challengeTimesCompleted,
    };
    if (challengeTimesNeeded < challengeTimesCompleted) {
      alert("Times needed can not be smaller than times completed");
    } else {
      handleAddChallenge(challengeDetails, objectiveId);
      router.push(`/objective/${objectiveId}`);
    }
  }

  return (
    <main>
      <StyledDetailContainer>
        <StyledButtonWrapper>
          <StyledButton
            onClick={() => router.push(`/objective/${objectiveId}`)}
          >
            🔙 Cancel
          </StyledButton>
        </StyledButtonWrapper>
        <h2>Track new Challenge</h2>
        <StyledGameForm onSubmit={handleSubmit}>
          <label htmlFor="challenge-description">Description</label>
          <textarea
            name="challenge-description"
            id="challenge-description"
            rows="5"
            pattern="^(?!\s*$).+"
            value={challengeDescription}
            onChange={handleDescriptionInput}
            required
          ></textarea>
          <StyledTimesWrapper>
            <label htmlFor="times-needed">Times needed</label>
            <StyledNumberInput
              type="number"
              name="times-needed"
              id="times-needed"
              min={0}
              value={challengeTimesNeeded}
              onChange={handleTimesNeededInput}
            />
            <label htmlFor="times-completed">Times completed</label>
            <StyledNumberInput
              type="number"
              name="times-completed"
              id="times-completed"
              min={0}
              value={challengeTimesCompleted}
              onChange={handleTimesCompletedInput}
            />
          </StyledTimesWrapper>

          <StyledGameButton>Save</StyledGameButton>
        </StyledGameForm>
      </StyledDetailContainer>
    </main>
  );
}

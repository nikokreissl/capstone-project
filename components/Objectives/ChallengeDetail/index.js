import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";
import {
  StyledDetailContainer,
  StyledGameForm,
  StyledTimesWrapper,
  StyledNumberInput,
  StyledGameButton,
} from "../../Competition/GameDetail/StyledGameDetail";
import { useState } from "react";

export default function ChallengeDetail({
  challenge,
  objectiveId,
  onClickBack,
  onUpdateChallenge,
  onDeleteChallenge,
}) {
  const [challengeDescription, setChallengeDescription] = useState(
    challenge.description
  );
  const [challengeTimesNeeded, setChallengeTimesNeeded] = useState(
    challenge.timesNeeded
  );
  const [challengeTimesCompleted, setChallengeTimesCompleted] = useState(
    challenge.timesCompleted
  );

  function handleDescriptionInput(event) {
    setChallengeDescription(event.target.value);
  }

  function handleTimesNeededInput(event) {
    setChallengeTimesNeeded(Number(event.target.value));
  }

  function handleTimesCompletedInput(event) {
    setChallengeTimesCompleted(Number(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newDetails = {
      description: challengeDescription,
      timesNeeded: challengeTimesNeeded,
      timesCompleted: challengeTimesCompleted,
    };
    if (challengeTimesNeeded < challengeTimesCompleted) {
      alert("Times needed can not be smaller than times completed");
    } else {
      onUpdateChallenge(newDetails, challenge.challengeId, objectiveId);
      onClickBack();
    }
  }

  function handleDeleteChallenge() {
    onDeleteChallenge(challenge.challengeId, objectiveId);
    onClickBack();
  }

  return (
    <main>
      <StyledDetailContainer>
        <StyledButtonWrapper>
          <StyledButton onClick={onClickBack}>🔙 Back</StyledButton>
          <StyledButton onClick={handleDeleteChallenge}>❌ Delete</StyledButton>
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
          <StyledGameButton>Update</StyledGameButton>
        </StyledGameForm>
      </StyledDetailContainer>
    </main>
  );
}

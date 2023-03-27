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

export default function ChallengeDetail({ onClickBack, challenge }) {
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

  return (
    <main>
      <StyledDetailContainer>
        <StyledButtonWrapper>
          <StyledButton onClick={onClickBack}>🔙 Back</StyledButton>
          <StyledButton>❌ Delete</StyledButton>
        </StyledButtonWrapper>
        <h2>Track new Challenge</h2>
        <StyledGameForm>
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

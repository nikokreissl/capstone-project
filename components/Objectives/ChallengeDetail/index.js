import {
  StyledEditChallengeForm,
  StyledTimesWrapper,
  StyledTimesText,
  StyledTimesButton,
} from "./StyledChallengeDetail";
import { useState } from "react";

export default function EditChallengeComponent({
  onRedirectBack,
  challenge,
  onUpdateChallenge,
  objectiveId,
}) {
  const { description, timesNeeded, timesCompleted, challengeId } = challenge;

  const [challengeDescription, setChallengeDescription] = useState(description);
  const [challengeTimesNeeded, setChallengechallengeTimesNeeded] =
    useState(timesNeeded);
  const [challengeTimesCompleted, setChallengeTimesCompleted] =
    useState(timesCompleted);

  function handleDescriptionInput(event) {
    setChallengeDescription(event.target.value);
  }

  function handleChallengeTimesUpdate(timesType, operation) {
    if (timesType === "needed") {
      if (operation === "increment") {
        setChallengechallengeTimesNeeded(challengeTimesNeeded + 1);
      } else if (operation === "decrement") {
        setChallengechallengeTimesNeeded(challengeTimesNeeded - 1);
      }
    } else if (timesType === "completed") {
      if (operation === "increment") {
        setChallengeTimesCompleted(challengeTimesCompleted + 1);
      } else if (operation === "decrement") {
        setChallengeTimesCompleted(challengeTimesCompleted - 1);
      }
    }
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
      onUpdateChallenge(newDetails, challengeId, objectiveId);
      onRedirectBack();
    }
  }

  return (
    <StyledEditChallengeForm onSubmit={handleSubmit}>
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
        <StyledTimesText>Times needed:</StyledTimesText>
        <StyledTimesButton
          type="button"
          onClick={() => handleChallengeTimesUpdate("needed", "increment")}
        >
          +1
        </StyledTimesButton>
        <p>{challengeTimesNeeded}</p>
        <StyledTimesButton
          type="button"
          onClick={() => handleChallengeTimesUpdate("needed", "decrement")}
          disabled={
            challengeTimesNeeded < 1 ||
            challengeTimesNeeded === challengeTimesCompleted
              ? true
              : false
          }
        >
          -1
        </StyledTimesButton>
      </StyledTimesWrapper>
      <StyledTimesWrapper>
        <StyledTimesText>Times completed:</StyledTimesText>
        <StyledTimesButton
          type="button"
          onClick={() => handleChallengeTimesUpdate("completed", "increment")}
          disabled={
            challengeTimesNeeded === challengeTimesCompleted ? true : false
          }
        >
          +1
        </StyledTimesButton>
        <p>{challengeTimesCompleted}</p>
        <StyledTimesButton
          type="button"
          onClick={() => handleChallengeTimesUpdate("completed", "decrement")}
          disabled={challengeTimesCompleted < 1 ? true : false}
        >
          -1
        </StyledTimesButton>
      </StyledTimesWrapper>
      <button>Update</button>
    </StyledEditChallengeForm>
  );
}

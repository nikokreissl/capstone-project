import {
  StyledTimesWrapper,
  StyledTimesParagraph,
  SyledTimesNumber,
  StyledTextarea,
} from "./StyledChallengeDetail";
import { StyledEditScoreUpdateButton } from "../../Competition/GameDetail/StyledGameDetail";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons";
import {
  StyledForm,
  StyledFormLabel,
} from "../../GeneralComponents/CreateForm/StyledCreateForm";
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

  function checkValidInput(input) {
    if (input.startsWith(" ")) {
      return false;
    } else {
      return true;
    }
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

  function handleSubmit() {
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
    <StyledForm onSubmit={(event) => event.preventDefault()}>
      <StyledFormLabel htmlFor="challenge-description">
        Description
      </StyledFormLabel>
      <StyledTextarea
        name="challenge-description"
        id="challenge-description"
        rows="5"
        maxLength={80}
        pattern="^(?!\s*$).+"
        value={challengeDescription}
        onChange={handleDescriptionInput}
        required
      ></StyledTextarea>
      <StyledTimesWrapper>
        <StyledTimesParagraph>Needed:</StyledTimesParagraph>
        <StyledEditScoreUpdateButton
          type="button"
          onClick={() => handleChallengeTimesUpdate("needed", "increment")}
        >
          +1
        </StyledEditScoreUpdateButton>
        <SyledTimesNumber>{challengeTimesNeeded}</SyledTimesNumber>
        <StyledEditScoreUpdateButton
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
        </StyledEditScoreUpdateButton>
      </StyledTimesWrapper>
      <StyledTimesWrapper>
        <StyledTimesParagraph>Completed:</StyledTimesParagraph>
        <StyledEditScoreUpdateButton
          type="button"
          onClick={() => handleChallengeTimesUpdate("completed", "increment")}
          disabled={
            challengeTimesNeeded === challengeTimesCompleted ? true : false
          }
        >
          +1
        </StyledEditScoreUpdateButton>
        <SyledTimesNumber>{challengeTimesCompleted}</SyledTimesNumber>
        <StyledEditScoreUpdateButton
          type="button"
          onClick={() => handleChallengeTimesUpdate("completed", "decrement")}
          disabled={challengeTimesCompleted < 1 ? true : false}
        >
          -1
        </StyledEditScoreUpdateButton>
      </StyledTimesWrapper>
      <StyledButtonComponent
        type="update"
        functionToBeExecuted={handleSubmit}
        disabled={
          !challengeDescription || !checkValidInput(challengeDescription)
            ? true
            : false
        }
      >
        Update
      </StyledButtonComponent>
    </StyledForm>
  );
}

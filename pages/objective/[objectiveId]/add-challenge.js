import { useRouter } from "next/router";
import { StyledDetailContainer } from "../../../components/Competition/GameDetail/StyledGameDetail";
import { StyledLinkComponent } from "../../../components/GeneralComponents/Links";
import { StyledButtonComponent } from "../../../components/GeneralComponents/Buttons";
import { useState, useContext } from "react";
import { DataContext } from "../../_app";
import {
  StyledEditChallengeForm,
  StyledTimesWrapper,
  StyledTimesText,
  StyledTimesButton,
} from "../../../components/Objectives/ChallengeDetail/StyledChallengeDetail";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../../components/GeneralComponents/PageInformation";

export default function AddChallengePage() {
  const router = useRouter();
  const path = router.asPath;
  const { objectiveId } = router.query;

  const { handleAddChallenge } = useContext(DataContext);

  const [challengeDescription, setChallengeDescription] = useState("");
  const [challengeTimesNeeded, setChallengechallengeTimesNeeded] = useState(0);
  const [challengeTimesCompleted, setChallengeTimesCompleted] = useState(0);

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
    const challengeDetails = {
      description: challengeDescription,
      timesNeeded: challengeTimesNeeded,
      timesCompleted: challengeTimesCompleted,
    };
    if (challengeTimesNeeded < challengeTimesCompleted) {
      alert("Times needed can not be smaller than times completed");
    } else {
      handleAddChallenge(challengeDetails, objectiveId);
      if (path.includes("archive")) {
        router.push(`/objective/${objectiveId}/?archive`);
      } else {
        router.push(`/objective/${objectiveId}`);
      }
    }
  }

  return (
    <StyledDetailContainer>
      <StyledLinkComponent
        href={
          path.includes("archive")
            ? `/objective/${objectiveId}/?archive`
            : `/objective/${objectiveId}`
        }
        type="back"
      >
        Cancel
      </StyledLinkComponent>
      <PageHeadlineComponent>Track new Challenge</PageHeadlineComponent>
      <StyledPageDescription>
        Set the <strong>challenge description</strong>, how often it{" "}
        <strong>needs to be completed</strong> and{" "}
        <strong>was completed</strong>.
      </StyledPageDescription>
      <StyledEditChallengeForm onSubmit={(event) => event.preventDefault()}>
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
        <StyledButtonComponent
          type="add"
          functionToBeExecuted={handleSubmit}
          disabled={
            !challengeDescription || !checkValidInput(challengeDescription)
              ? true
              : false
          }
        >
          Create
        </StyledButtonComponent>
      </StyledEditChallengeForm>
    </StyledDetailContainer>
  );
}

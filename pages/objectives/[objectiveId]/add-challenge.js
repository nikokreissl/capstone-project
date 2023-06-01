import { useRouter } from "next/router";
import { StyledLinkComponent } from "../../../components/GeneralComponents/Links";
import { StyledButtonComponent } from "../../../components/GeneralComponents/Buttons";
import { useState, useContext } from "react";
import { DataContext } from "../../_app";
import {
  StyledForm,
  StyledFormLabel,
} from "../../../components/GeneralComponents/CreateForm/StyledCreateForm";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../../components/GeneralComponents/PageInformation";
import { StyledEditScoreUpdateButton } from "../../../components/Competition/GameDetail/StyledGameDetail";
import {
  StyledTimesWrapper,
  StyledTimesParagraph,
  SyledTimesNumber,
  StyledTextarea,
} from "../../../components/Objectives/ChallengeDetail/StyledChallengeDetail";

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
    handleAddChallenge(challengeDetails, objectiveId);
    if (path.includes("archive")) {
      router.push(`/objectives/${objectiveId}/?archive`);
    } else {
      router.push(`/objectives/${objectiveId}`);
    }
  }

  return (
    <>
      <StyledLinkComponent
        href={
          path.includes("archive")
            ? `/objectives/${objectiveId}/?archive`
            : `/objectives/${objectiveId}`
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
      <StyledForm onSubmit={(event) => event.preventDefault()}>
        <StyledFormLabel htmlFor="challenge-description">
          Description
        </StyledFormLabel>
        <StyledTextarea
          name="challenge-description"
          id="challenge-description"
          rows="5"
          pattern="^(?!\s*$).+"
          maxLength={80}
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
      </StyledForm>
    </>
  );
}

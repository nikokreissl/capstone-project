import EditChallengeComponent from "../../../../components/Objectives/ChallengeDetail/";
import { StyledDetailContainer } from "../../../../components/Competition/GameDetail/StyledGameDetail";
import {
  StyledButtonWrapper,
  StyledButton,
} from "../../../../components/GeneralComponents/Buttons/StyledButton";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { DataContext } from "../../../_app";

export default function ChallengeDetailPage() {
  const router = useRouter();
  const path = router.asPath;
  const { objectiveId, challengeId } = router.query;

  const {
    objectives,
    handleChallengeUpdate: onUpdateChallenge,
    handleChallengeDelete: onDeleteChallenge,
  } = useContext(DataContext);

  const currentObjective = objectives.find(
    (objective) => objectiveId === objective.id
  );

  if (!currentObjective) {
    return <p>Loading...</p>;
  }

  const currentChallenge = currentObjective.challenges.find(
    (challenge) => challengeId === challenge.challengeId
  );

  if (!currentChallenge) {
    return <p>Loading...</p>;
  }

  const [challengeDescription, setChallengeDescription] = useState(
    currentChallenge.description
  );
  const [challengeTimesNeeded, setChallengechallengeTimesNeeded] = useState(
    currentChallenge.timesNeeded
  );
  const [challengeTimesCompleted, setChallengeTimesCompleted] = useState(
    currentChallenge.timesCompleted
  );

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
      onUpdateChallenge(newDetails, currentChallenge.challengeId, objectiveId);
      handleClickBack();
    }
  }

  function handleDeleteChallenge() {
    onDeleteChallenge(currentChallenge.challengeId, objectiveId);
    handleClickBack();
  }

  function handleClickBack() {
    if (path.includes("archive")) {
      router.push(`/objective/${currentObjective.id}/?archive`);
    } else {
      router.push(`/objective/${currentObjective.id}`);
    }
  }

  return (
    <StyledDetailContainer>
      <StyledButtonWrapper>
        <StyledButton onClick={handleClickBack}>🔙 Back</StyledButton>
        <StyledButton onClick={handleDeleteChallenge}>❌ Delete</StyledButton>
      </StyledButtonWrapper>
      <h2>Track new Challenge</h2>
      <EditChallengeComponent
        onSubmitChallenge={handleSubmit}
        onDescriptionChange={handleDescriptionInput}
        challengeDescription={challengeDescription}
        challengeTimesNeeded={challengeTimesNeeded}
        challengeTimesCompleted={challengeTimesCompleted}
        onChallengeTimesChange={handleChallengeTimesUpdate}
        editType="update"
      />
    </StyledDetailContainer>
  );
}

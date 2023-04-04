import { StyledDetailContainer } from "../../../../components/Competition/GameDetail/StyledGameDetail";
import {
  StyledButtonWrapper,
  StyledButton,
} from "../../../../components/GeneralComponents/Buttons/StyledButton";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { DataContext } from "../../../_app";
import EditChallengeComponent from "../../../../components/Objectives/ChallengeDetail/";

export default function ChallengeDetailPage() {
  const router = useRouter();
  const path = router.asPath;
  const { objectiveId, challengeId } = router.query;

  const {
    objectives,
    handleChallengeUpdate,
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
        onRedirectBack={handleClickBack}
        challenge={currentChallenge}
        onUpdateChallenge={handleChallengeUpdate}
        objectiveId={currentObjective.id}
      />
    </StyledDetailContainer>
  );
}

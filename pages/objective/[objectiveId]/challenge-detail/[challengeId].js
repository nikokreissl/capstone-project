import { StyledDetailContainer } from "../../../../components/Competition/GameDetail/StyledGameDetail";
import { StyledLinkComponent } from "../../../../components/GeneralComponents/Links";
import { StyledButtonComponent } from "../../../../components/GeneralComponents/Buttons";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../../../components/GeneralComponents/PageInformation";
import { useRouter } from "next/router";
import { useContext } from "react";
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
    callbackBack();
  }

  function callbackBack() {
    if (path.includes("archive")) {
      router.push(`/objective/${currentObjective.id}/?archive`);
    } else {
      router.push(`/objective/${currentObjective.id}`);
    }
  }

  return (
    <StyledDetailContainer>
      <StyledLinkComponent
        type="back"
        href={
          path.includes("archive")
            ? `/objective/${currentObjective.id}/?archive`
            : `/objective/${currentObjective.id}`
        }
      >
        Back
      </StyledLinkComponent>
      <StyledButtonComponent type="delete" callback={handleDeleteChallenge}>
        Delete
      </StyledButtonComponent>
      <PageHeadlineComponent>Edit challenge</PageHeadlineComponent>
      <StyledPageDescription>
        Update the <strong>challenge description</strong>, how often it{" "}
        <strong>needs to be completed</strong> and{" "}
        <strong>was completed</strong>.
      </StyledPageDescription>
      <EditChallengeComponent
        onRedirectBack={callbackBack}
        challenge={currentChallenge}
        onUpdateChallenge={handleChallengeUpdate}
        objectiveId={currentObjective.id}
      />
    </StyledDetailContainer>
  );
}

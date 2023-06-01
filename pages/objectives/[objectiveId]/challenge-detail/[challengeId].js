import { StyledLinkComponent } from "../../../../components/GeneralComponents/Links";
import {
  StyledButtonComponent,
  StyledButtonLinkWrapper,
} from "../../../../components/GeneralComponents/Buttons";
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
    functionToBeExecutedBack();
  }

  function functionToBeExecutedBack() {
    if (path.includes("archive")) {
      router.push(`/objectives/${currentObjective.id}/?archive`);
    } else {
      router.push(`/objectives/${currentObjective.id}`);
    }
  }

  return (
    <>
      <StyledButtonLinkWrapper>
        <StyledLinkComponent
          type="back"
          href={
            path.includes("archive")
              ? `/objectives/${currentObjective.id}/?archive`
              : `/objectives/${currentObjective.id}`
          }
        >
          Back
        </StyledLinkComponent>
        <StyledButtonComponent
          type="delete"
          functionToBeExecuted={handleDeleteChallenge}
        >
          Delete
        </StyledButtonComponent>
      </StyledButtonLinkWrapper>
      <PageHeadlineComponent>Edit challenge</PageHeadlineComponent>
      <StyledPageDescription>
        Update the <strong>challenge description</strong>, how often it{" "}
        <strong>needs to be completed</strong> and{" "}
        <strong>was completed</strong>.
      </StyledPageDescription>
      <EditChallengeComponent
        onRedirectBack={functionToBeExecutedBack}
        challenge={currentChallenge}
        onUpdateChallenge={handleChallengeUpdate}
        objectiveId={currentObjective.id}
      />
    </>
  );
}

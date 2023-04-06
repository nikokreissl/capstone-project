import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { StyledDetailsContainer } from "../../GeneralComponents/DetailView";
import ChallengeList from "../ChallengeList";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation";

export default function ObjectiveDetail({
  objective,
  onToggleEdit,
  onEditChallengeClick,
  onChallengeQuickEditUpdate,
  path,
}) {
  if (!objective) {
    return <p>Loading...</p>;
  }

  const challengeProgress = objective.challenges.filter(
    (challenge) => challenge.timesNeeded === challenge.timesCompleted
  );

  return (
    <StyledDetailsContainer>
      <StyledLinkComponent
        href={path.includes("archive") ? "/archive/objectives" : "/"}
        type="back"
      >
        Back
      </StyledLinkComponent>
      <StyledButtonComponent type="edit" functionToBeExecuted={onToggleEdit}>
        Edit
      </StyledButtonComponent>
      <PageHeadlineComponent>Objective details</PageHeadlineComponent>
      <StyledPageDescription>
        {" "}
        Add new challenges to the objective by clicking{" "}
        <strong>Add challenge</strong>. Update your progess by increasing the
        amount the challenge has been completed.
      </StyledPageDescription>
      <p>
        Objective name:
        <br />
        {objective.name}
        <br />
        Challenges completed: {challengeProgress.length} /{" "}
        {objective.challenges.length}
      </p>
      <StyledLinkComponent
        href={
          path.includes("archive")
            ? `/objective/${objective.id}/add-challenge/?archive`
            : `/objective/${objective.id}/add-challenge`
        }
        type="add"
      >
        Add challenge
      </StyledLinkComponent>
      <ChallengeList
        objective={objective}
        onEditChallengeClick={onEditChallengeClick}
        onChallengeQuickEditUpdate={onChallengeQuickEditUpdate}
        path={path}
      />
    </StyledDetailsContainer>
  );
}

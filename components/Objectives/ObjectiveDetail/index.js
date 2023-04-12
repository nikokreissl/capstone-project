import { StyledLinkComponent } from "../../GeneralComponents/Links";
import ChallengeList from "../ChallengeList";
import {
  StyledButtonComponent,
  StyledButtonLinkWrapper,
} from "../../GeneralComponents/Buttons";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation";
import {
  StyledHeadline,
  StyledTransparentContainer,
} from "../../GeneralComponents/Cards";
import ProgressBarComponent from "../ProgressBar";

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
    <>
      <StyledButtonLinkWrapper>
        <StyledLinkComponent
          href={path.includes("archive") ? "/archive/objectives" : "/"}
          type="back"
        >
          Back
        </StyledLinkComponent>
        <StyledButtonComponent type="edit" functionToBeExecuted={onToggleEdit}>
          Edit
        </StyledButtonComponent>
      </StyledButtonLinkWrapper>
      <PageHeadlineComponent>Objective details</PageHeadlineComponent>
      <StyledPageDescription>
        {" "}
        Add new challenges to the objective by clicking{" "}
        <strong>Add challenge</strong>. Update your progess by increasing the
        amount the challenge has been completed.
      </StyledPageDescription>
      <StyledHeadline>{objective.name}</StyledHeadline>
      <StyledTransparentContainer>
        <ProgressBarComponent
          type="objective"
          challengesNeeded={challengeProgress.length}
          challengesCompleted={objective.challenges.length}
        />
      </StyledTransparentContainer>

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
    </>
  );
}

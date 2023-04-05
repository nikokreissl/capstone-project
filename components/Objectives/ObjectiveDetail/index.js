import { StyledButton } from "../../GeneralComponents/Buttons/StyledButton";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import {
  StyledDetailsContainer,
  StyledDetailButton,
} from "../../GeneralComponents/DetailView";
import ChallengeList from "../ChallengeList";

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
      <StyledButton onClick={onToggleEdit}>⚙️ Edit</StyledButton>
      <h2>{objective.name}</h2>
      <h3>Details</h3>
      <p>
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

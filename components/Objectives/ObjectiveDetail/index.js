import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";
import {
  StyledDetailsContainer,
  StyledDetailButton,
} from "../../GeneralComponents/DetailView";
import ChallengeList from "../ChallengeList";

export default function ObjectiveDetail({
  objective,
  onClickBack,
  onToggleEdit,
}) {
  if (!objective) {
    return <p>Loading...</p>;
  }

  const challengeProgress = objective.challenges.filter(
    (challenge) => challenge.timesNeeded === challenge.timesCompleted
  );

  return (
    <StyledDetailsContainer>
      <StyledButtonWrapper>
        <StyledButton onClick={onClickBack}>🔙 Back</StyledButton>
        <StyledButton onClick={onToggleEdit}>⚙️ Edit</StyledButton>
      </StyledButtonWrapper>
      <h2>{objective.name}</h2>
      <h3>Details</h3>
      <p>
        Challenges completed: {challengeProgress.length} /{" "}
        {objective.challenges.length}
      </p>
      <StyledDetailButton>Add challenge</StyledDetailButton>
      <ChallengeList objective={objective} />
    </StyledDetailsContainer>
  );
}

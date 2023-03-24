import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";
import {
  StyledDetailsContainer,
  StyledDetailButton,
} from "../../GeneralComponents/DetailView";

export default function ObjectiveDetail({ objective, onClickBack }) {
  const challengeProgress = objective.challenges.filter(
    (challenge) => challenge.timesNeeded === challenge.timesCompleted
  );
  return (
    <main>
      <StyledDetailsContainer>
        <StyledButtonWrapper>
          <StyledButton onClick={onClickBack}>🔙 Back</StyledButton>
          <StyledButton>⚙️ Edit</StyledButton>
        </StyledButtonWrapper>
        <h2>{objective.name}</h2>
        <h3>Details</h3>
        <p>
          Challenges completed: {challengeProgress.length} /{" "}
          {objective.challenges.length}
        </p>
        <StyledDetailButton>Add challenge</StyledDetailButton>
      </StyledDetailsContainer>
    </main>
  );
}

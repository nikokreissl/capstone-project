import styled from "styled-components";

export default function ProgressBarComponent({
  challengesNeeded,
  challengesCompleted,
  type,
  challengeNumber,
}) {
  const progressBarText = () => {
    if (type === "objective") {
      if (challengesNeeded === 0) {
        return <em>No challenges added yet</em>;
      } else {
        return `Challenges completed: ${challengesCompleted} / ${challengesNeeded}`;
      }
    } else {
      return `Completed: ${challengesCompleted} / ${challengesNeeded}`;
    }
  };

  const progress = (challengesCompleted / challengesNeeded) * 100;

  return (
    <StyledProgressBarBorder
      progress={progress}
      challengeNumber={challengeNumber}
      type={type}
    >
      <StyledProgressBarText challengeNumber={challengeNumber} type={type}>
        {progressBarText()}
      </StyledProgressBarText>
    </StyledProgressBarBorder>
  );
}

const StyledProgressBarBorder = styled.div`
  border: 1px solid
    ${(props) =>
      !props.type !== "objective" && props.challengeNumber % 2 !== 0
        ? "var(--light-gray)"
        : "var(--medium-dark)"};
  height: 25px;
  margin: 10px;
  border-radius: 25px;
  background: linear-gradient(
    90deg,
    rgba(33, 156, 0, 1) ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
  display: flex;
  align-items: center;
`;

const StyledProgressBarText = styled.p`
  color: ${(props) =>
    !props.type !== "objective" && props.challengeNumber % 2 !== 0
      ? "var(--light-gray)"
      : "var(--medium-dark)"};
  margin-left: 10px;
`;

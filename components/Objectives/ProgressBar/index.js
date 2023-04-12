import styled, { keyframes } from "styled-components";

export default function ProgressBarComponent({
  challengesNeeded,
  challengesCompleted,
  type,
}) {
  const progressBarText = () => {
    if (type === "objective") {
      if (challengesNeeded === 0) {
        return <em>No challenges added yet</em>;
      } else {
        return `Challenges completed: ${challengesCompleted} / ${challengesNeeded}`;
      }
    } else {
      return `Challenge completed: ${challengesCompleted} / ${challengesNeeded}`;
    }
  };

  const progress = (challengesNeeded / challengesCompleted) * 100;

  return (
    <StyledProgressBarBorder progress={progress}>
      <StyledProgressBarText>{progressBarText()}</StyledProgressBarText>
    </StyledProgressBarBorder>
  );
}

const StyledProgressBarBorder = styled.div`
  border: 1px solid var(--light-gray);
  height: 35px;
  margin: 10px;
  border-radius: 25px;
  background: linear-gradient(
    90deg,
    rgba(33, 156, 0, 1) ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
  display: flex;
  align-items: center;
  transition: background 0.5s ease-in-out;
`;

const StyledProgressBarText = styled.p`
  margin-left: 10px;
`;

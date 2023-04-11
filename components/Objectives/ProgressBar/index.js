import styled from "styled-components";

export default function ProgressBarComponent({
  timesNeeded,
  timesCompleted,
  type,
}) {
  return (
    <StyledProgressBarBorder
      timesNeeded={timesNeeded}
      timesCompleted={timesCompleted}
    >
      <p>
        {type === "objective"
          ? `Challenges completed: ${timesCompleted} / ${timesNeeded}`
          : timesNeeded === 0
          ? "No challenges added yet"
          : `Challenge completed: ${timesCompleted} / ${timesNeeded}`}
      </p>
    </StyledProgressBarBorder>
  );
}

const StyledProgressBarBorder = styled.div`
  border: 1px solid var(--light-gray);
  height: 30px;
  padding: 4px;
  margin: 10px;
  border-radius: 25px;
  background: linear-gradient(
    90deg,
    rgba(33, 156, 0, 1)
      ${({ timesCompleted, timesNeeded }) =>
        (timesCompleted / timesNeeded) * 100}%,
    transparent
      ${({ timesCompleted, timesNeeded }) =>
        (timesCompleted / timesNeeded) * 100}%
  );
`;

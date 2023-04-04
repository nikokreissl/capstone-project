import styled from "styled-components";
import Link from "next/link";

export const StyledChallengeList = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function StyledChallengeListItemComponent({
  challengeNumber,
  challenge,
  path,
}) {
  const { description, timesNeeded, timesCompleted } = challenge;
  return (
    <StyledChallengeListItem challengeNumber={challengeNumber}>
      <StyledChallengeDescription>{description}</StyledChallengeDescription>
      <StyledChallengeQuickEditWrapper>
        <StyledChallengeProgress>
          {timesCompleted} / {timesNeeded}
        </StyledChallengeProgress>
        <button>+1</button>
        <button>-1</button>
        <StyleChallengeEditButton>Edit ✏️</StyleChallengeEditButton>
      </StyledChallengeQuickEditWrapper>
    </StyledChallengeListItem>
  );
}

const StyledChallengeListItem = styled.li`
  background-color: ${(props) =>
    props.challengeNumber % 2 !== 0 ? "transparent" : "lightgray"};
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const StyledChallengeDescription = styled.p`
  flex-basis: 70%;
`;

const StyledChallengeQuickEditWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 30px);
  justify-items: center;
  gap: 5px;
`;

const StyledChallengeProgress = styled.p`
  grid-column: 1 / -1;
`;

const StyleChallengeEditButton = styled.button`
  grid-column: 1 / -1;
  width: 100%;
`;

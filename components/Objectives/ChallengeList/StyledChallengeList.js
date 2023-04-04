import styled from "styled-components";

export const StyledChallengeList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledChallengeListItem = styled.li`
  background-color: ${(props) =>
    props.challengeNumber % 2 !== 0 ? "transparent" : "lightgray"};
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const StyledChallengeDescription = styled.p`
  flex-basis: 70%;
`;

export const StyledChallengeQuickEditWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 30px);
  justify-items: center;
  gap: 5px;
`;

export const StyledChallengeProgress = styled.p`
  grid-column: 1 / -1;
`;

export const StyleChallengeEditButton = styled.button`
  grid-column: 1 / -1;
  width: 100%;
`;

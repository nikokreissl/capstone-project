import styled from "styled-components";
import Link from "next/link";

export const StyledChallengeList = styled.ul`
  margin: 0;
  margin-top: 15px;
  padding: 0;
`;

export const StyledChallengeListItem = styled.li`
  background-color: ${(props) =>
    props.challengeNumber % 2 !== 0 ? "var(--medium)" : "var(--light-gray)"};
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const StyledChallengeDescription = styled.p`
  flex-basis: 70%;
  color: ${(props) =>
    props.challengeNumber % 2 !== 0
      ? "var(--light-gray)"
      : "var(--medium-dark)"};
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
  color: ${(props) =>
    props.challengeNumber % 2 !== 0
      ? "var(--light-gray)"
      : "var(--medium-dark)"};
`;

export const StyledQuickEditButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: var(--medium-dark);
  border-radius: 5px;
  color: var(--orange);
  border: 1px solid var(--orange);
  &:disabled {
    background-color: gray;
    color: var(--light-gray);
    border-color: gray;
  }
`;

export const StyleChallengeEditLink = styled(Link)`
  grid-column: 1 / -1;
  color: var(--orange);
  text-decoration: none;
`;

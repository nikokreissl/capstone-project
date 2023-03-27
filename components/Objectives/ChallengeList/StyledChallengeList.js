import styled from "styled-components";

export const StyledChallengeList = styled.ul`
  margin: 12px;
`;

export default function StyledChallengeListItemComponent({
  children,
  challengeNumber,
}) {
  return (
    <StyledChallengeListItem challengeNumber={challengeNumber}>
      {children}
    </StyledChallengeListItem>
  );
}

const StyledChallengeListItem = styled.li`
  background-color: ${(props) =>
    props.challengeNumber % 2 !== 0 ? "transparent" : "lightgray"};
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const StyledChallengeDescription = styled.p`
  flex: 80%;
`;
export const StyledChallengeProgess = styled.p`
  flex: 80px;
  text-align: center;
  margin-left: 5px;
`;

export const StyledChallengeProgessButton = styled.button`
  flex: 170px;
  height: 50px;
  text-align: center;
  margin-left: 5px;
`;

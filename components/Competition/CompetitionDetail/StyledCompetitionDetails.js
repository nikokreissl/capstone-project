import styled from "styled-components";
import { StyledButton } from "../../GeneralComponents/Buttons/StyledButton";

export const StyledCompetitionDetailsContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 70vw;
`;

export const StyledCompetitionDetailButton = styled(StyledButton)`
  width: 50%;
  align-self: center;
`;

export const StyledGameList = styled.ul`
  margin: 12px;
`;

export default function StyledGameListItemComponent({ children, gameNumber }) {
  return (
    <StyledGameListItem gameNumber={gameNumber}>{children}</StyledGameListItem>
  );
}

export const StyledGameListItem = styled.li`
  background-color: ${(props) =>
    props.gameNumber % 2 === 0 ? "transparent" : "lightgray"};
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;

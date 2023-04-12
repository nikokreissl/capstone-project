import styled from "styled-components";
import Link from "next/link";
import { EditIcon } from "../../../public/icons";

export const StyledGameList = styled.ul`
  margin: 12px;
  padding: 0;
`;

export default function StyledGameListItemComponent({
  gamenumber,
  game,
  path,
  competition,
}) {
  return (
    <StyledListItem gamenumber={gamenumber}>
      <StyledListItemParagraph gamenumber={gamenumber}>
        Game {gamenumber}
      </StyledListItemParagraph>
      <StyledListItemParagraph gamenumber={gamenumber}>
        {game.userScore}:{game.opponentScore}
      </StyledListItemParagraph>
      <StyledListItemLink
        gamenumber={gamenumber}
        href={
          path.includes("archive")
            ? `/competition/${competition.id}/game-detail/${game.gameId}/?archive`
            : `/competition/${competition.id}/game-detail/${game.gameId}`
        }
      >
        Edit game ✏️
      </StyledListItemLink>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  color: ${(props) =>
    props.gamenumber % 2 === 0 ? "var(--light-gray)" : "var(--medium-dark)"};
  background-color: ${(props) =>
    props.gamenumber % 2 === 0 ? "var(--medium)" : "var(--light-gray)"};
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`;

const StyledListItemParagraph = styled.p`
  color: ${(props) =>
    props.gamenumber % 2 === 0 ? "var(--light-gray)" : "var(--medium-dark)"};
`;

const StyledListItemLink = styled(Link)`
  color: var(--orange);
  text-decoration: none;
  padding: 5px;
`;
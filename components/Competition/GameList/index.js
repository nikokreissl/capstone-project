import StyledGameListItemComponent, { StyledGameList } from "./StyledGameList";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function GameList({
  reversedCompetitionGames,
  competition,
  path,
}) {
  return (
    <>
      {reversedCompetitionGames.length < 1 ? (
        <EmptyState itemName="game" path={path} />
      ) : (
        <StyledGameList>
          {reversedCompetitionGames.map((game) => (
            <StyledGameListItemComponent
              key={game.gameId}
              path={path}
              competition={competition}
              gamenumber={
                reversedCompetitionGames.length -
                reversedCompetitionGames.indexOf(game)
              }
              game={game}
            />
          ))}
        </StyledGameList>
      )}
    </>
  );
}

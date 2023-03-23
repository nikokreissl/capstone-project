import StyledGameListItemComponent, {
  StyledGameList,
} from "../CompetitionDetail/StyledCompetitionDetails";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function GameList({
  reversedCompetitionGames,
  onClickgameDetail,
  competition,
}) {
  return (
    <>
      {reversedCompetitionGames.length < 1 ? (
        <EmptyState itemName="game" href={`${competition.id}/track-new-game`} />
      ) : (
        <StyledGameList>
          {reversedCompetitionGames.map((game) => (
            <StyledGameListItemComponent
              key={game.gameId}
              gameNumber={
                reversedCompetitionGames.length -
                reversedCompetitionGames.indexOf(game)
              }
            >
              Game{" "}
              {reversedCompetitionGames.length -
                reversedCompetitionGames.indexOf(game)}{" "}
              - {game.userScore}:{game.opponentScore}
              <button
                onClick={() => onClickgameDetail(competition.id, game.gameId)}
              >
                ✏️ Edit Game
              </button>
            </StyledGameListItemComponent>
          ))}
        </StyledGameList>
      )}
    </>
  );
}

import StyledGameListItemComponent, {
  StyledGameList,
} from "../CompetitionDetail/StyledCompetitionDetails";
import Link from "next/link";
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
              gameNumber={
                reversedCompetitionGames.length -
                reversedCompetitionGames.indexOf(game)
              }
            >
              Game{" "}
              {reversedCompetitionGames.length -
                reversedCompetitionGames.indexOf(game)}{" "}
              - {game.userScore}:{game.opponentScore}
              <Link
                href={
                  path.includes("archive")
                    ? `/competition/${competition.id}/game-detail/${game.gameId}/?archive`
                    : `/competition/${competition.id}/game-detail/${game.gameId}`
                }
              >
                ✏️ Edit Game
              </Link>
            </StyledGameListItemComponent>
          ))}
        </StyledGameList>
      )}
    </>
  );
}

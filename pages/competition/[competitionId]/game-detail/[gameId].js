import { useRouter } from "next/router";
import { DataContext } from "../../../_app";
import { useContext } from "react";
import GameDetail from "../../../../components/Competition/GameDetail";

export default function GameDetailPage() {
  const { competitions, handleGameUpdate, handleGameDelete } =
    useContext(DataContext);

  const router = useRouter();
  const path = router.asPath;
  const { competitionId, gameId } = router.query;

  const currentCompetition = competitions.find(
    (competition) => competition.id === competitionId
  );

  if (!currentCompetition) {
    return <div>Loading...</div>;
  }

  const currentGame = currentCompetition.gamesPlayed.find(
    (game) => game.gameId === gameId
  );

  if (!currentGame) {
    return <div>Loading...</div>;
  }

  function handleBackToCompetition() {
    if (path.includes("archive")) {
      router.push(`/competition/${competitionId}/?archive`);
    } else {
      router.push(`/competition/${competitionId}`);
    }
  }

  return (
    <GameDetail
      game={currentGame}
      gameNumber={currentCompetition.gamesPlayed.indexOf(currentGame) + 1}
      onUpdateGame={handleGameUpdate}
      onDeleteGame={handleGameDelete}
      competitionId={currentCompetition.id}
      onRedirectBack={handleBackToCompetition}
      path={path}
    />
  );
}

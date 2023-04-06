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

  return (
    <GameDetail
      game={currentGame}
      onUpdateGame={handleGameUpdate}
      onDeleteGame={handleGameDelete}
      competitionId={currentCompetition.id}
      path={path}
      router={router}
    />
  );
}

import { useRouter } from "next/router";
import { DataContext } from "../../../_app";
import { useContext } from "react";
import GameDetail from "../../../../components/Competition/GameDetail";

export default function GameDetailPage() {
  const { competitions, handleGameUpdate, handleGameDelete } =
    useContext(DataContext);

  const router = useRouter();
  const { competitionId, gameId } = router.query;

  const currentCompetition = competitions.find(
    (competition) => competition.id === competitionId
  );

  const currentGame = currentCompetition.gamesPlayed.find(
    (game) => game.gameId === gameId
  );

  if (!currentCompetition || !currentGame) {
    return <div>Loading...</div>;
  }

  function handleBackToCompetition() {
    router.push(`/competition/${currentCompetition.id}`);
  }

  return (
    <GameDetail
      game={currentGame}
      onClickBack={handleBackToCompetition}
      onUpdateGame={handleGameUpdate}
      onDeleteGame={handleGameDelete}
      competitionId={currentCompetition.id}
    />
  );
}

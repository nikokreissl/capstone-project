import { useRouter } from "next/router";
import { DataContext } from "../../../_app";
import { useContext } from "react";
import GameDetail from "../../../../components/Competition/GameDetail";

export default function GameDetailPage() {
  const { competitions } = useContext(DataContext);

  const router = useRouter();
  const { competitionId, gameId } = router.query;

  const currentCompetition = competitions.find(
    (competition) => competition.id === competitionId
  );

  if (!currentCompetition) {
    return <div>Loading...</div>;
  }

  const currentGame = currentCompetition.gamesPlayed.find(
    (game) => (game.gameId = gameId)
  );

  return <GameDetail game={currentGame} />;
}

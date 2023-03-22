import { useRouter } from "next/router";
import CompetitionDetail from "../../components/Competition/CompetitionDetail";
import EditCompetition from "../../components/Competition/CompetitionEdit";
import { useState, useContext } from "react";
import { DataContext } from "../_app";

export default function CompetitionDetailPage() {
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();
  const { competitionId } = router.query;

  const {
    competitions,
    handleUpdateCompetition,
    handleArchiveCompetition,
    handleDeleteCompetition,
  } = useContext(DataContext);
  const competition = competitions.find(
    (competition) => competition.id === competitionId
  );

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  function handleDirectBack() {
    router.back();
  }

  function handleDirectHome() {
    router.push("/");
  }

  function handleGameDetailRedirect(competitionId, gameId) {
    router.push(`/competition/${competitionId}/game-detail/${gameId}`);
  }

  if (!competition) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      {isEdit ? (
        <EditCompetition
          onToggleEdit={toggleEdit}
          competition={competition}
          onUpdateCompetition={handleUpdateCompetition}
          onArchiveCompetition={handleArchiveCompetition}
          onDeleteCompetition={handleDeleteCompetition}
          onClickBack={handleDirectBack}
        />
      ) : (
        <CompetitionDetail
          competition={competition}
          onClickBack={handleDirectHome}
          onToggleEdit={toggleEdit}
          onClickgameDetail={handleGameDetailRedirect}
        />
      )}
    </main>
  );
}

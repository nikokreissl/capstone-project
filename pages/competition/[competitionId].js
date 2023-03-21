import { useRouter } from "next/router";
import CompetitionDetail from "../../components/CompetitionDetail";
import EditCompetition from "../../components/CompetitionEdit";
import { useState } from "react";
import { useContext } from "react";
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

  return (
    <main>
      {isEdit ? (
        <EditCompetition
          onToggleEdit={toggleEdit}
          competition={competition}
          onUpdateCompetition={handleUpdateCompetition}
          onArchiveCompetition={handleArchiveCompetition}
          onDeleteCompetition={handleDeleteCompetition}
        />
      ) : (
        <CompetitionDetail
          competition={competition}
          onClickBack={handleClickBack}
          onToggleEdit={toggleEdit}
        />
      )}
    </main>
  );
}

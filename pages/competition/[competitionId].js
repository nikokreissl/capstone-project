import { useRouter } from "next/router";
import CompetitionDetail from "../../components/Competition/CompetitionDetail";
import EditCompetition from "../../components/Competition/CompetitionEdit";
import { useState, useContext } from "react";
import { DataContext } from "../_app";

export default function CompetitionDetailPage() {
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();
  const path = router.asPath;
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

  function handleDirectHome() {
    if (path.includes("archive")) {
      router.push("/archive/competitions");
    } else {
      router.push("/");
    }
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
          onClickBack={handleDirectHome}
        />
      ) : (
        <CompetitionDetail
          competition={competition}
          onClickBack={handleDirectHome}
          onToggleEdit={toggleEdit}
          path={path}
        />
      )}
    </main>
  );
}

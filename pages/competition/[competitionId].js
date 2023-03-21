import { useRouter } from "next/router";
import CompetitionDetail from "../../components/CompetitionDetail";
import EditCompetition from "../../components/CompetitionEdit";
import { useState } from "react";

export default function CompetitionDetailPage() {
  const [isEdit, setIsEdit] = useState(false);

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  const router = useRouter();
  const { competitionId } = router.query;

  function handleClickBack() {
    router.back();
  }

  return (
    <main>
      {isEdit ? (
        <EditCompetition onToggleEdit={toggleEdit} />
      ) : (
        <CompetitionDetail
          competitionId={competitionId}
          onClickBack={handleClickBack}
          onToggleEdit={toggleEdit}
        />
      )}
    </main>
  );
}

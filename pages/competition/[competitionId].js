import { useRouter } from "next/router";
import CompetitionDetail from "../../components/CompetitionDetail";
import EditCompetition from "../../components/CompetitionEdit";
import { useState } from "react";

export default function CompetitionDetailPage() {
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();
  const { competitionId } = router.query;

  function handleClickBack() {
    router.back();
  }

  return (
    <>
      {isEdit ? (
        <EditCompetition />
      ) : (
        <CompetitionDetail
          competitionId={competitionId}
          onClickBack={handleClickBack}
        />
      )}
    </>
  );
}

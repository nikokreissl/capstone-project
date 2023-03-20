import { useRouter } from "next/router";
import CompetitionDetail from "../../components/CompetitionDetail";

export default function CompetitionDetailPage() {
  const router = useRouter();
  const { competitionId } = router.query;

  function handleClickBack() {
    router.back();
  }

  return (
    <CompetitionDetail
      competitionId={competitionId}
      onClickBack={handleClickBack}
    />
  );
}

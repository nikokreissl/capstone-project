import { useRouter } from "next/router";
import CompetitionDetail from "../../components/CompetitionDetail";
import { competitions } from "../../data/competition";

export default function CompetitionDetailPage() {
  const router = useRouter();
  const { competitionId } = router.query;

  const competition = competitions.find(
    (competition) => competition.id === competitionId
  );

  console.log(competition);

  return <CompetitionDetail competition={competition} />;
}

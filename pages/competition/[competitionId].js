import { useRouter } from "next/router";

export default function CompetitionDetailPage() {
  const router = useRouter();
  const { competitionId } = router.query;
  return <div>{competitionId}</div>;
}

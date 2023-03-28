import { useRouter } from "next/router";

export default function TacticDetailPage() {
  const router = useRouter();
  const { tacticId } = router.query;
  const path = router.asPath;

  return <div>[tacticId]</div>;
}

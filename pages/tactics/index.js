import { userTactics } from "../../data/tactic/user-tactics";
import TacticsList from "../../components/Tactics/TacticsList";
import { useRouter } from "next/router";

export default function TacticsOverviewPage() {
  const router = useRouter();
  const path = router.asPath;

  return (
    <main>
      <TacticsList headline="Tactics" tactics={userTactics} path={path} />
    </main>
  );
}

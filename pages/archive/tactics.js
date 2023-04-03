import TacticsList from "../../components/Tactics/TacticsList";
import { useContext } from "react";
import { DataContext } from "../_app";
import { useRouter } from "next/router";

export default function ArchiveTacticsPage() {
  const router = useRouter();
  const path = router.asPath;

  const { userTactics } = useContext(DataContext);

  if (!userTactics) {
    return <div>Loading...</div>;
  }

  const archivedTactics = userTactics.filter(
    (tactic) => tactic.isArchived === true
  );

  return (
    <main>
      <TacticsList tactics={archivedTactics} headline="Tactics" path={path} />
    </main>
  );
}

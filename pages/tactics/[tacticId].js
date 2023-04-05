import TacticsDetail from "../../components/Tactics/TacticsDetail";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "../_app";

export default function TacticDetailPage() {
  const {
    userTactics,
    handleUpdateTactic,
    handleDeleteTactic,
    handleArchiveTactic,
  } = useContext(DataContext);

  const router = useRouter();
  const { tacticId } = router.query;
  const path = router.asPath;

  if (!userTactics) {
    return <p>Loading...</p>;
  }

  const currentTactic = userTactics.find((tactic) => tactic.id === tacticId);

  if (!currentTactic) {
    return <p>Loading...</p>;
  }

  function handleDirectHome() {
    if (path.includes("archive")) {
      router.push("/archive/tactics");
    } else {
      router.push("/tactics");
    }
  }

  return (
    <main>
      <TacticsDetail
        tactic={currentTactic}
        onUpdateTactic={handleUpdateTactic}
        onDeleteTactic={handleDeleteTactic}
        onArchiveTactic={handleArchiveTactic}
        onDirectHome={handleDirectHome}
        path={path}
      />
    </main>
  );
}

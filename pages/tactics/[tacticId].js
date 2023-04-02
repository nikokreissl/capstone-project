import TacticsDetail from "../../components/Tactics/TacticsDetail";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "../_app";

export default function TacticDetailPage() {
  const { userTactics, handleUpdateTactic } = useContext(DataContext);

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

  return (
    <main>
      <TacticsDetail
        tactic={currentTactic}
        onUpdateTactic={handleUpdateTactic}
      />
    </main>
  );
}

import ObjectiveList from "../../components/Objectives/ObjectiveList";
import { useContext } from "react";
import { DataContext } from "../_app";

export default function ArchiveObjectivePage() {
  const { objectives } = useContext(DataContext);

  if (!objectives) {
    return <div>Loading...</div>;
  }

  const archivedObjectives = objectives.filter(
    (objective) => objective.isArchived === true
  );

  return (
    <main>
      <ObjectiveList objectives={archivedObjectives} headline="Competitions" />
    </main>
  );
}

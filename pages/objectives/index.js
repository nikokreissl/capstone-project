import { useContext } from "react";
import { DataContext } from "../_app";
import { useRouter } from "next/router";
import ObjectiveList from "../../components/Objectives/ObjectiveList";

export default function ObjectivesPage() {
  const router = useRouter();
  const path = router.asPath;
  const { objectives } = useContext(DataContext);

  if (!objectives) {
    return <div>Loading...</div>;
  }

  const notArchivedObjectives = objectives.filter(
    (objective) => objective.isArchived === false
  );
  return (
    <ObjectiveList
      objectives={notArchivedObjectives}
      headline="Objectives"
      path={path}
    />
  );
}

import ObjectiveList from "../../components/Objectives/ObjectiveList";
import { StyledLinkComponent } from "../../components/GeneralComponents/Links";
import { useContext } from "react";
import { DataContext } from "../_app";
import { useRouter } from "next/router";

export default function ArchiveObjectivePage() {
  const { objectives } = useContext(DataContext);
  const router = useRouter();
  const path = router.asPath;

  if (!objectives) {
    return <div>Loading...</div>;
  }

  const archivedObjectives = objectives.filter(
    (objective) => objective.isArchived === true
  );

  return (
    <main>
      <StyledLinkComponent
        href={path.includes("archive") ? "/archive" : "/"}
        type="back"
      >
        Back
      </StyledLinkComponent>
      <ObjectiveList
        objectives={archivedObjectives}
        headline="Competitions"
        path={path}
      />
    </main>
  );
}

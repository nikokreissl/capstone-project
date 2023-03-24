import EditObjective from "../../components/Objectives/ObjectiveEdit";
import ObjectiveDetail from "../../components/Objectives/ObjectiveDetail";
import { useContext } from "react";
import { DataContext } from "../_app";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ObjectiveDetailPage() {
  const [isEdit, setIsEdit] = useState(false);
  const { objectives, handleUpdateObjective } = useContext(DataContext);
  const router = useRouter();
  const { objectiveId } = router.query;

  if (!objectives) {
    return <p>Loading...</p>;
  }

  const currentObjective = objectives.find(
    (objective) => objective.id === objectiveId
  );

  function toggleEdit() {
    setIsEdit(!isEdit);
    console.log(isEdit);
  }

  function handleDirectHome() {
    router.push("/");
  }

  return (
    <main>
      {isEdit ? (
        <EditObjective
          onToggleEdit={toggleEdit}
          objective={currentObjective}
          onUpdateObjective={handleUpdateObjective}
        />
      ) : (
        <ObjectiveDetail
          objective={currentObjective}
          onClickBack={handleDirectHome}
          onToggleEdit={toggleEdit}
        />
      )}
    </main>
  );
}

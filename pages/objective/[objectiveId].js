import EditObjective from "../../components/Objectives/ObjectiveEdit";
import ObjectiveDetail from "../../components/Objectives/ObjectiveDetail";
import { useContext } from "react";
import { DataContext } from "../_app";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ObjectiveDetailPage() {
  const [isEdit, setIsEdit] = useState(false);
  const { objectives, handleUpdateObjective, handleDeleteObjective } =
    useContext(DataContext);
  const router = useRouter();
  const { objectiveId } = router.query;

  const currentObjective = objectives.find(
    (objective) => objective.id === objectiveId
  );

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  function handleDirectHome() {
    router.push("/");
  }

  if (!currentObjective) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      {isEdit ? (
        <EditObjective
          onToggleEdit={toggleEdit}
          objective={currentObjective}
          onUpdateObjective={handleUpdateObjective}
          onDeleteObjective={handleDeleteObjective}
          onClickBack={handleDirectHome}
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

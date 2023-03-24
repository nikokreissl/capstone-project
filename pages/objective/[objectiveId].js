import React from "react";
import { useRouter } from "next/router";
import ObjectiveDetail from "../../components/Objectives/ObjectiveDetail";
import { useContext } from "react";
import { DataContext } from "../_app";

export default function ObjectiveDetailPage() {
  const { objectives } = useContext(DataContext);
  const router = useRouter();
  const { objectiveId } = router.query;

  if (!objectives) {
    return <p>Loading...</p>;
  }

  const currentObjective = objectives.find(
    (objective) => objective.id === objectiveId
  );

  function handleDirectHome() {
    router.push("/");
  }

  return (
    <ObjectiveDetail
      objective={currentObjective}
      onClickBack={handleDirectHome}
    />
  );
}

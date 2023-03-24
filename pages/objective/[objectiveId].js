import React from "react";
import { useRouter } from "next/router";
import ObjectiveDetail from "../../components/Objectives/ObjectiveDetail";
import { useContext } from "react";
import { DataContext } from "../_app";

export default function ObjectiveDetailPage() {
  const { objectives } = useContext(DataContext);
  const router = useRouter();
  const { objectiveId } = router.query;

  const currentObjective = objectives.find(
    (objective) => objective.id === objectiveId
  );

  return <ObjectiveDetail objective={currentObjective} />;
}

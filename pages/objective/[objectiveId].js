import EditObjective from "../../components/Objectives/ObjectiveEdit";
import ObjectiveDetail from "../../components/Objectives/ObjectiveDetail";
import { useContext } from "react";
import { DataContext } from "../_app";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ObjectiveDetailPage() {
  const [isEdit, setIsEdit] = useState(false);
  const {
    objectives,
    handleUpdateObjective,
    handleDeleteObjective,
    handleArchiveObjective,
    handleChallengeQuickEditUpdate,
  } = useContext(DataContext);
  const router = useRouter();
  const path = router.asPath;
  const { objectiveId } = router.query;

  const currentObjective = objectives.find(
    (objective) => objective.id === objectiveId
  );

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  function handleDirectHome() {
    if (path.includes("archive")) {
      router.push("/archive/objectives");
    } else {
      router.push("/");
    }
  }

  function handleAddNewChallenge(challengeId) {
    if (path.includes("archive")) {
      router.push(`/objective/${challengeId}/add-challenge/?archive`);
    } else {
      router.push(`/objective/${challengeId}/add-challenge`);
    }
  }

  function handleChallengeDetailRedirect(objectiveId, challengeId) {
    if (path.includes("archive")) {
      router.push(
        `/objective/${objectiveId}/challenge-detail/${challengeId}/?archive`
      );
    } else {
      router.push(`/objective/${objectiveId}/challenge-detail/${challengeId}`);
    }
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
          onArchiveCompetition={handleArchiveObjective}
          onClickBack={handleDirectHome}
        />
      ) : (
        <ObjectiveDetail
          objective={currentObjective}
          onClickBack={handleDirectHome}
          onToggleEdit={toggleEdit}
          onAddnewChallenge={handleAddNewChallenge}
          onEditChallengeClick={handleChallengeDetailRedirect}
          onChallengeQuickEditUpdate={handleChallengeQuickEditUpdate}
          path={path}
        />
      )}
    </main>
  );
}

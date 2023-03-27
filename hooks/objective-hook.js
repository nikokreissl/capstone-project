import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export function useObjectives(givenObjectives) {
  const [objectives, setObjectives] = useLocalStorageState("objectives", {
    defaultValue: givenObjectives,
  });

  function handleAddObjective(newObjectiveName) {
    const objective = {
      id: uid(),
      isArchived: false,
      name: newObjectiveName,
      challenges: [],
    };
    setObjectives([objective, ...objectives]);
  }

  function handleUpdateObjective(newObjectiveName, objectiveId) {
    setObjectives(
      objectives.map((objective) =>
        objective.id === objectiveId
          ? { ...objective, name: newObjectiveName }
          : objective
      )
    );
  }

  function handleDeleteObjective(objectiveId) {
    setObjectives(
      objectives.filter((objective) => objective.id !== objectiveId)
    );
  }

  function handleArchiveObjective(objectiveId) {
    setObjectives(
      objectives.map((objective) =>
        objectiveId === objective.id
          ? { ...objective, isArchived: !objective.isArchived }
          : objective
      )
    );
  }

  function handleAddChallenge(newChallengeDetails, objectiveId) {
    const currentObjective = objectives.find(
      (objective) => objectiveId === objective.id
    );
    const newChallenge = {
      challengeId: uid(),
      description: newChallengeDetails.description,
      timesNeeded: newChallengeDetails.timesNeeded,
      timesCompleted: newChallengeDetails.timesCompleted,
    };
    const newAllChallenges = [...currentObjective.challenges, newChallenge];
    setObjectives(
      objectives.map((objective) =>
        objectiveId === objective.id
          ? { ...objective, challenges: newAllChallenges }
          : objective
      )
    );
  }

  function handleChallengeUpdate(
    updatedChallengeDetails,
    challengeId,
    objectiveId
  ) {
    const currentObjective = objectives.find(
      (objective) => objectiveId === objective.id
    );
    const updatedChallenges = currentObjective.challenges.map((challenge) =>
      challengeId === challenge.challengeId
        ? {
            ...challenge,
            description: updatedChallengeDetails.description,
            timesNeeded: updatedChallengeDetails.timesNeeded,
            timesCompleted: updatedChallengeDetails.timesCompleted,
          }
        : challenge
    );
    setObjectives(
      objectives.map((objective) =>
        objective.id === objectiveId
          ? { ...objective, challenges: updatedChallenges }
          : objective
      )
    );
  }

  function handleChallengeDelete(challengeId, objectiveId) {
    const currentObjective = objectives.find(
      (objective) => objectiveId === objective.id
    );
    const newChallengeOverview = currentObjective.challenges.filter(
      (challenge) => challengeId !== challenge.challengeId
    );
    setObjectives(
      objectives.map((objective) =>
        objectiveId === objective.id
          ? { ...objective, challenges: newChallengeOverview }
          : objective
      )
    );
  }
  return {
    objectives,
    handleAddObjective,
    handleUpdateObjective,
    handleDeleteObjective,
    handleArchiveObjective,
    handleAddChallenge,
    handleChallengeUpdate,
    handleChallengeDelete,
  };
}

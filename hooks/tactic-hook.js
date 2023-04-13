import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { getGeneralInstructions, createDefaultTactic } from "../utils/utils";

export function useTactics() {
  const [userTactics, setUserTactics] = useLocalStorageState("userTactics", {
    defaultValue: [],
  });

  function handleAddTactic(newFormation) {
    const tactic = {
      id: uid(),
      isArchived: false,
      name: newFormation.name,
      formation: newFormation.formation,
      generalInstructions: getGeneralInstructions(),
      playerInstructions: createDefaultTactic(newFormation.formation),
    };
    setUserTactics([tactic, ...userTactics]);
  }

  function handleUpdateTactic(updatedFormationData, tacticId) {
    const currentTactic = userTactics.find((tactic) => tactic.id === tacticId);

    function updateInstructions(data, instructions) {
      for (const [key, value] of Object.entries(data)) {
        for (const instruction of instructions) {
          if (key.startsWith(instruction.instructionFor)) {
            for (const detailedInstruction of instruction.detailedInstructions) {
              if (key.endsWith(detailedInstruction.instructionName)) {
                detailedInstruction.value = value;
              }
            }
          }
        }
      }
      return instructions;
    }

    const updatedGeneralInstructions = updateInstructions(
      updatedFormationData,
      currentTactic.generalInstructions
    );
    const updatedPlayerInstructions = updateInstructions(
      updatedFormationData,
      currentTactic.playerInstructions
    );
    setUserTactics(
      userTactics.map((tactic) =>
        tacticId === tactic.id
          ? {
              ...tactic,
              name: updatedFormationData.tacticname,
              generalInstructions: updatedGeneralInstructions,
              playerInstructions: updatedPlayerInstructions,
            }
          : tactic
      )
    );
  }

  function handleDeleteTactic(TacticId) {
    setUserTactics(userTactics.filter((tactic) => tactic.id !== TacticId));
  }

  function handleArchiveTactic(tacticId) {
    setUserTactics(
      userTactics.map((tactic) =>
        tacticId === tactic.id
          ? {
              ...tactic,
              isArchived: !tactic.isArchived,
            }
          : tactic
      )
    );
  }

  return {
    userTactics,
    handleAddTactic,
    handleUpdateTactic,
    handleDeleteTactic,
    handleArchiveTactic,
  };
}

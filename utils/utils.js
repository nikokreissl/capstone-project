import {
  generalInstructionsTemplate,
  formations,
  playersDetailInstructions,
  playerInstructionValues,
} from "../data/tactic/tactics-template";

export function getGeneralInstructions() {
  const defaultGeneralInstuctions = generalInstructionsTemplate.map(
    (instruction) => {
      return {
        ...instruction,
        detailedInstructions: instruction.detailedInstructions.map(
          (detailedInstruction) => {
            if (Array.isArray(detailedInstruction.value)) {
              return {
                ...detailedInstruction,
                value: [detailedInstruction.value[0]],
              };
            } else {
              return detailedInstruction;
            }
          }
        ),
      };
    }
  );
  return defaultGeneralInstuctions;
}

export function createDefaultTactic(createFormation) {
  function findFormationDetails(createFormation) {
    return formations.find((formation) => createFormation === formation.name);
  }

  const formationDetails = findFormationDetails(createFormation);

  function createPlayerInstructionsArray(formationDetails) {
    return formationDetails.positions.map((position) => {
      return {
        instructionFor: position.position,
        key: position.key,
      };
    });
  }

  const playerInstructionsArray =
    createPlayerInstructionsArray(formationDetails);

  function addInstructionsToPlayerPositions(playerInstructionsArray) {
    return playerInstructionsArray.map((playerInstruction) => {
      return {
        ...playerInstruction,
        detailedInstructions: playersDetailInstructions
          .find((playerDetailInstructions) =>
            playerDetailInstructions.key.includes(playerInstruction.key)
          )
          .instructions.map((instruction) => ({
            instructionName: instruction,
          })),
      };
    });
  }

  const playerInstructionsArrayWithInstructions =
    addInstructionsToPlayerPositions(playerInstructionsArray);

  function addValuesToInstructions(playerInstructionsArrayWithInstructions) {
    const newInstructions = playerInstructionsArrayWithInstructions.map(
      (instruction) => {
        const newDetailedInstructions = instruction.detailedInstructions.map(
          (detailedInstruction) => {
            const matchingValue = playerInstructionValues.find(
              (value) =>
                value.instructionName === detailedInstruction.instructionName
            );
            if (matchingValue) {
              return {
                ...detailedInstruction,
                value: matchingValue.values[0],
              };
            }
            return detailedInstruction;
          }
        );
        return {
          ...instruction,
          detailedInstructions: newDetailedInstructions,
        };
      }
    );
    return newInstructions;
  }
  return addValuesToInstructions(playerInstructionsArrayWithInstructions);
}

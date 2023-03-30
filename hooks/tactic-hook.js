import { generalInstructionsTemplate } from "../data/tactic/tactics-template";

export function useGetGeneralInstructions() {
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
  return {
    defaultGeneralInstuctions,
  };
}

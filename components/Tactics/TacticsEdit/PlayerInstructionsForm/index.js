import {
  StyledDetailedInstructionEditWrapper,
  StyledTacticFieldset,
  StyledTacticLegend,
  StyledTacticSelect,
} from "../StyledTacticsEdit";
import {
  formations,
  playersDetailInstructions,
  playerInstructionValues,
} from "../../../../data/tactic/tactics-template";
import { StyledFormLabel } from "../../../GeneralComponents/CreateForm/StyledCreateForm";

export default function EditTacticPlayerForm({ tactic }) {
  function getGivenValueInstruction(tactic, inFor, inName) {
    const givenValue = tactic.playerInstructions
      .find((p) => p.instructionFor === inFor)
      .detailedInstructions.find((d) => d.instructionName === inName).value;
    return givenValue;
  }
  const currentFormation = findFormation(tactic.formation);
  function findFormation(tacticFormation) {
    return formations.find((formation) => formation.name === tacticFormation)
      .positions;
  }

  const positionsWithInstructions = addInstructionToPositions(currentFormation);
  function addInstructionToPositions(formation) {
    const positionsWithInstructions = formation.map((position) => {
      const instruction = playersDetailInstructions.find((p) =>
        p.key.includes(position.key)
      );
      return {
        ...position,
        instructions: instruction ? instruction.instructions : [],
      };
    });
    return positionsWithInstructions;
  }

  const finalFormation = addDetailedInstructionsToPositions(
    positionsWithInstructions
  );
  function addDetailedInstructionsToPositions(formation) {
    const positionsWithDetailedInstructions = formation.map((position) => {
      const instructions = position.instructions.map((instruction) => {
        return playerInstructionValues.find(
          (p) => p.instructionName === instruction
        );
      });
      return { ...position, instructions };
    });
    return positionsWithDetailedInstructions;
  }

  return (
    <>
      {finalFormation.map((position) => (
        <StyledTacticFieldset key={position.position} name={position.position}>
          <StyledTacticLegend>{position.position}</StyledTacticLegend>

          {position.instructions.map((instruction) => (
            <StyledDetailedInstructionEditWrapper
              key={instruction.instructionName}
            >
              <StyledFormLabel
                htmlFor={`${position.position}-${instruction.instructionName}`}
              >
                {instruction.instructionName}
              </StyledFormLabel>
              <StyledTacticSelect
                name={`${position.position} ${instruction.instructionName}`}
                id={`${position.position}-${instruction.instructionName}`}
              >
                {instruction.values.map((value) => (
                  <option
                    key={value}
                    value={value}
                    selected={
                      getGivenValueInstruction(
                        tactic,
                        position.position,
                        instruction.instructionName
                      ) === value
                    }
                  >
                    {value}
                  </option>
                ))}
              </StyledTacticSelect>
            </StyledDetailedInstructionEditWrapper>
          ))}
        </StyledTacticFieldset>
      ))}
    </>
  );
}

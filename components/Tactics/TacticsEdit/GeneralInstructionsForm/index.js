import styled from "styled-components";
import { generalInstructionsTemplate } from "../../../../data/tactic/tactics-template";

export default function EditTacticGeneralForm({ tactic }) {
  function getGivenValueGeneralInstruction(tactic, inFor, inName) {
    const givenValue = tactic.generalInstructions
      .find((g) => g.instructionFor === inFor)
      .detailedInstructions.find((d) => d.instructionName === inName).value;
    return givenValue;
  }
  return (
    <>
      {generalInstructionsTemplate.map((instruction) => (
        <fieldset key={instruction.instructionFor}>
          <legend>{instruction.instructionFor}</legend>
          {instruction.detailedInstructions.map((detailedInstruction) => (
            <StyledDetailedInstructionEditWrapper
              key={detailedInstruction.instructionName}
            >
              <label htmlFor={detailedInstruction.instructionName}>
                {detailedInstruction.instructionName}
              </label>
              {Array.isArray(detailedInstruction.value) ? (
                <select
                  name={detailedInstruction.instructionName}
                  id={detailedInstruction.instructionName}
                >
                  {detailedInstruction.value.map((value) => (
                    <option
                      key={value}
                      value={value}
                      defaultValue={getGivenValueGeneralInstruction(
                        tactic,
                        instruction.instructionFor,
                        detailedInstruction.instructionName
                      )}
                    >
                      {value}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  htmlFor={detailedInstruction.instructionName}
                  type={"number"}
                  min={`${detailedInstruction.minValue}`}
                  max={`${detailedInstruction.maxValue}`}
                  defaultValue={getGivenValueGeneralInstruction(
                    tactic,
                    instruction.instructionFor,
                    detailedInstruction.instructionName
                  )}
                />
              )}
            </StyledDetailedInstructionEditWrapper>
          ))}
        </fieldset>
      ))}
    </>
  );
}

export const StyledDetailedInstructionEditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

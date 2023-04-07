import styled from "styled-components";
import { generalInstructionsTemplate } from "../../../../data/tactic/tactics-template";
import InputRangeComponent from "./InputRangeComponent";

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
        <fieldset
          key={instruction.instructionFor}
          name={instruction.instructionFor}
        >
          <legend>{instruction.instructionFor}</legend>
          {instruction.detailedInstructions.map((detailedInstruction) => (
            <StyledDetailedInstructionEditWrapper
              key={detailedInstruction.instructionName}
            >
              <label
                htmlFor={`${instruction.instructionFor} ${detailedInstruction.instructionName}`}
              >
                {detailedInstruction.instructionName}
              </label>
              {Array.isArray(detailedInstruction.value) ? (
                <select
                  name={`${instruction.instructionFor} ${detailedInstruction.instructionName}`}
                  id={`${instruction.instructionFor}-${detailedInstruction.instructionName}`}
                >
                  {detailedInstruction.value.map((value) => (
                    <option
                      key={value}
                      value={value}
                      selected={
                        getGivenValueGeneralInstruction(
                          tactic,
                          instruction.instructionFor,
                          detailedInstruction.instructionName
                        ) === value
                      }
                    >
                      {value}
                    </option>
                  ))}
                </select>
              ) : (
                <InputRangeComponent
                  instructionFor={instruction.instructionFor}
                  detailedInstruction={detailedInstruction}
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

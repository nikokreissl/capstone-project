import { StyledFormLabel } from "../../../GeneralComponents/CreateForm/StyledCreateForm";
import { generalInstructionsTemplate } from "../../../../data/tactic/tactics-template";
import {
  StyledDetailedInstructionEditWrapper,
  StyledTacticFieldset,
  StyledTacticLegend,
  StyledTacticSelect,
} from "../StyledTacticsEdit";
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
        <StyledTacticFieldset
          key={instruction.instructionFor}
          name={instruction.instructionFor}
        >
          <StyledTacticLegend>{instruction.instructionFor}</StyledTacticLegend>
          {instruction.detailedInstructions.map((detailedInstruction) => (
            <StyledDetailedInstructionEditWrapper
              key={detailedInstruction.instructionName}
            >
              <StyledFormLabel
                htmlFor={`${instruction.instructionFor} ${detailedInstruction.instructionName}`}
              >
                {detailedInstruction.instructionName}
              </StyledFormLabel>
              {Array.isArray(detailedInstruction.value) ? (
                <StyledTacticSelect
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
                </StyledTacticSelect>
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
        </StyledTacticFieldset>
      ))}
    </>
  );
}

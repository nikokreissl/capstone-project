import {
  StyledTab,
  StyledTabsContainer,
} from "../TacticsDetail/StyledTacticsDetail";
import { useState } from "react";
import { StyledButton } from "../../GeneralComponents/Buttons/StyledButton";
import styled from "styled-components";
import { generalInstructionsTemplate } from "../../../data/tactic/tactics-template";

export default function TacticsEdit({ tactic, onToggleEdit }) {
  const [tacticName, setTacticName] = useState(tactic.name);
  function handleFormationNameInput(event) {
    setTacticName(event.target.value);
  }

  const [showGeneralInstructions, setShowGeneralInstructions] = useState(true);
  function handleClickGeneralInstructions(event) {
    event.preventDefault();
    if (showGeneralInstructions === false) {
      setShowGeneralInstructions(!showGeneralInstructions);
      setShowPlayerInstructions(!showPlayerInstructions);
    }
  }

  const [showPlayerInstructions, setShowPlayerInstructions] = useState(false);
  function handleClickPlayerInstructions(event) {
    event.preventDefault();
    if (showPlayerInstructions === false) {
      setShowPlayerInstructions(!showPlayerInstructions);
      setShowGeneralInstructions(!showGeneralInstructions);
    }
  }

  function getGivenValueGeneralInstruction(inFor, inName) {
    const givenValue = tactic.generalInstructions
      .find((g) => g.instructionFor === inFor)
      .detailedInstructions.find((d) => d.instructionName === inName).value;
    return givenValue;
  }

  return (
    <>
      <StyledButton onClick={onToggleEdit}>🗑️ Discard changes</StyledButton>
      <StyledForm>
        <button>Submit</button>
        <h2>{tactic.name}</h2>
        <label htmlFor="tactic-name">Tactic name</label>
        <input
          type="text"
          name="tacticname"
          id="tactic-name "
          pattern="^(?!\s*$).+"
          value={tacticName}
          onChange={handleFormationNameInput}
          required
        />
        <StyledTabsContainer>
          <StyledTab
            shown={showGeneralInstructions}
            handleTabClick={handleClickGeneralInstructions}
          >
            General Instructions
          </StyledTab>
          <StyledTab
            shown={showPlayerInstructions}
            handleTabClick={handleClickPlayerInstructions}
          >
            Player Instructions
          </StyledTab>
        </StyledTabsContainer>
        {generalInstructionsTemplate.map((instruction) => (
          <div key={instruction.instructionFor}>
            <h4>{instruction.instructionFor}</h4>
            {instruction.detailedInstructions.map((detailedInstruction) => (
              <StyledDetailedInstructionEditWrapper
                key={detailedInstruction.instructionName}
              >
                <label htmlFor={detailedInstruction.instructionName}>
                  {detailedInstruction.instructionName}
                </label>
                {Array.isArray(detailedInstruction.value) ? (
                  <select>
                    {detailedInstruction.value.map((value) => (
                      <option
                        key={value}
                        selected={
                          getGivenValueGeneralInstruction(
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
                  <input
                    htmlFor={detailedInstruction.instructionName}
                    type={"number"}
                    value={getGivenValueGeneralInstruction(
                      instruction.instructionFor,
                      detailedInstruction.instructionName
                    )}
                  />
                )}
              </StyledDetailedInstructionEditWrapper>
            ))}
          </div>
        ))}
      </StyledForm>
    </>
  );
}

// {generalInstructionsTemplate
//     .find(
//       (g) => g.instructionFor === instruction.instructionFor
//     )
//     .detailedInstructions.find(
//       (d) =>
//         d.instructionName ===
//         detailedInstruction.instructionName
//     )
//     .value.map((v) => (
//       <option key={v}>{v}</option>
//     ))}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledDetailedInstructionEditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

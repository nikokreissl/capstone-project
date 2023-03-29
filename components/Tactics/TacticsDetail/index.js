import { useState } from "react";
import { StyledDetailsContainer } from "../../GeneralComponents/DetailView";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";
import { StyledTab, StyledTabsContainer } from "./StyledTacticsDetail";
import InstructionDetail from "../Instruction";

export default function TacticsDetail({ tactic }) {
  const [showGeneralInstructions, setShowGeneralInstructions] = useState(true);
  const [showPlayerInstructions, setShowPlayerInstructions] = useState(false);

  function handleClickGeneralInstructions() {
    if (showGeneralInstructions === false) {
      setShowGeneralInstructions(!showGeneralInstructions);
      setShowPlayerInstructions(!showPlayerInstructions);
    }
  }

  function handleClickPlayerInstructions() {
    if (showPlayerInstructions === false) {
      setShowPlayerInstructions(!showPlayerInstructions);
      setShowGeneralInstructions(!showGeneralInstructions);
    }
  }

  if (!tactic) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <StyledDetailsContainer>
        <StyledButtonWrapper>
          <StyledButton>🔙 Back</StyledButton>
          <StyledButton>⚙️ Edit</StyledButton>
        </StyledButtonWrapper>
        <h2>{tactic.name}</h2>
        <h3>{tactic.formation}</h3>
      </StyledDetailsContainer>
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
      {showGeneralInstructions && (
        <>
          {tactic.generalInstructions.map((instruction) => (
            <InstructionDetail
              key={instruction.instructionType}
              instruction={instruction}
            />
          ))}
        </>
      )}
      {showPlayerInstructions && (
        <>
          {tactic.playerInstructions.map((player) => (
            <InstructionDetail key={player.position} instruction={player} />
          ))}
        </>
      )}
    </>
  );
}

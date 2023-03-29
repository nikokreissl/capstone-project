import { useState } from "react";
import {
  StyledDetailButton,
  StyledDetailsContainer,
} from "../../GeneralComponents/DetailView";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";
import { StyledTab, StyledTabsContainer } from "./StyledTacticsDetail";

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
    </>
  );
}

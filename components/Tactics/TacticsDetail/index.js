import { useState } from "react";
import { StyledDetailsContainer } from "../../GeneralComponents/DetailView";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";
import {
  StyledTab,
  StyledTabsContainer,
  StyledInstruction,
} from "./StyledTacticsDetail";

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
      {showGeneralInstructions && (
        <>
          <StyledInstruction instructionHeadline="Defense">
            <p>Defensive Style: {tactic.generalInstructions.defensiveStyle}</p>
            <p>Defensive Width: {tactic.generalInstructions.defensiveWidth}</p>
            <p>Defensive Depth: {tactic.generalInstructions.defensiveDepth}</p>
          </StyledInstruction>
          <StyledInstruction instructionHeadline="Attacking">
            <p>Build Up Play: {tactic.generalInstructions.buildUpPlay}</p>
            <p>Chance Creation: {tactic.generalInstructions.chanceCreation}</p>
            <p>Offensive Width: {tactic.generalInstructions.offensiveWidth}</p>
            <p>Players in Box: {tactic.generalInstructions.playersInBox}</p>
          </StyledInstruction>
          <StyledInstruction instructionHeadline="Corners & Free Kicks">
            <p>Corners: {tactic.generalInstructions.corners}</p>
            <p>Free Kicks: {tactic.generalInstructions.freeKicks}</p>
          </StyledInstruction>
        </>
      )}
    </>
  );
}

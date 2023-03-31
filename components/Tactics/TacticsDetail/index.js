import { useState } from "react";
import { StyledDetailsContainer } from "../../GeneralComponents/DetailView";
import { StyledDetailsLink } from "../../Competition/CompetitionCard/StyledCompetitionCard";
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
      <StyledDetailsLink href={"/tactics"}>Back</StyledDetailsLink>
      <StyledDetailsContainer>
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
              key={instruction.instructionFor}
              instruction={instruction}
            />
          ))}
        </>
      )}
      {showPlayerInstructions && (
        <>
          {tactic.playerInstructions.map((player) => (
            <InstructionDetail
              key={player.instructionFor}
              instruction={player}
            />
          ))}
        </>
      )}
    </>
  );
}

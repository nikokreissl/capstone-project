import { useState } from "react";
import { StyledDetailsContainer } from "../../GeneralComponents/DetailView";
import { StyledDetailsLink } from "../../Competition/CompetitionCard/StyledCompetitionCard";
import { StyledTab, StyledTabsContainer } from "./StyledTacticsDetail";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";
import TacticsEdit from "../TacticsEdit";

import InstructionDetail from "../Instruction";

export default function TacticsDetail({
  tactic,
  onUpdateTactic,
  onDeleteTactic,
  onArchiveTactic,
  onClickBack,
}) {
  const [showGeneralInstructions, setShowGeneralInstructions] = useState(true);
  function handleClickGeneralInstructions() {
    if (showGeneralInstructions === false) {
      setShowGeneralInstructions(!showGeneralInstructions);
      setShowPlayerInstructions(!showPlayerInstructions);
    }
  }

  const [showPlayerInstructions, setShowPlayerInstructions] = useState(false);
  function handleClickPlayerInstructions() {
    if (showPlayerInstructions === false) {
      setShowPlayerInstructions(!showPlayerInstructions);
      setShowGeneralInstructions(!showGeneralInstructions);
    }
  }

  const [showEdit, setShowEdit] = useState(false);
  function toggleShowEdit() {
    setShowEdit(!showEdit);
  }

  if (!tactic) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {showEdit ? (
        <TacticsEdit
          tactic={tactic}
          onToggleEdit={toggleShowEdit}
          onUpdateTactic={onUpdateTactic}
          onDeleteTactic={onDeleteTactic}
          onArchiveTactic={onArchiveTactic}
          onToggleShowEdit={toggleShowEdit}
          onClickBack={onClickBack}
        />
      ) : (
        <>
          <StyledButtonWrapper>
            <StyledButton onClick={onClickBack}>Back</StyledButton>
            <StyledButton onClick={toggleShowEdit}>⚙️ Edit</StyledButton>
          </StyledButtonWrapper>
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
      )}
    </>
  );
}

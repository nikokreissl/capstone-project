import { useState } from "react";
import { StyledDetailsContainer } from "../../GeneralComponents/DetailView";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { StyledTab, StyledTabsContainer } from "./StyledTacticsDetail";
import { StyledButton } from "../../GeneralComponents/Buttons/StyledButton";
import TacticsEdit from "../TacticsEdit";
import InstructionDetail from "../Instruction";

export default function TacticsDetail({
  tactic,
  onUpdateTactic,
  onDeleteTactic,
  onArchiveTactic,
  path,
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

  function handleDirectHome() {
    if (path.includes("archive")) {
      router.push("/archive/tactics");
    } else {
      router.push("/tactics");
    }
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
          onClickBack={handleDirectHome}
        />
      ) : (
        <>
          <StyledLinkComponent
            href={path.includes("archive") ? "/archive/tactics" : "/tactics"}
            type="back"
          >
            Back
          </StyledLinkComponent>
          <StyledButton onClick={toggleShowEdit}>⚙️ Edit</StyledButton>
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

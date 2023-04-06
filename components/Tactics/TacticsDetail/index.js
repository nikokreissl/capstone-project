import { useState } from "react";
import { StyledDetailsContainer } from "../../GeneralComponents/DetailView";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { StyledTab, StyledTabsContainer } from "./StyledTacticsDetail";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons";
import TacticsEdit from "../TacticsEdit";
import InstructionDetail from "../Instruction";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation";

export default function TacticsDetail({
  tactic,
  onUpdateTactic,
  onDeleteTactic,
  onArchiveTactic,
  onDirectHome,
  path,
}) {
  const [showGeneralInstructions, setShowGeneralInstructions] = useState(true);
  function callbackGeneralInstructions() {
    if (showGeneralInstructions === false) {
      setShowGeneralInstructions(!showGeneralInstructions);
      setShowPlayerInstructions(!showPlayerInstructions);
    }
  }

  const [showPlayerInstructions, setShowPlayerInstructions] = useState(false);
  function callbackPlayerInstructions() {
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
          onClickBack={onDirectHome}
        />
      ) : (
        <>
          <StyledLinkComponent
            href={path.includes("archive") ? "/archive/tactics" : "/tactics"}
            type="back"
          >
            Back
          </StyledLinkComponent>
          <StyledButtonComponent type="edit" callback={toggleShowEdit}>
            Edit
          </StyledButtonComponent>
          <PageHeadlineComponent>Tactic details</PageHeadlineComponent>
          <StyledPageDescription>
            Check out the different instructions for this formation. You can
            switch between <strong>General instructions</strong> and{" "}
            <strong>Player instructions</strong> by clicking the correpsonding
            button.
          </StyledPageDescription>
          <StyledDetailsContainer>
            <h2>{tactic.name}</h2>
            <h3>{tactic.formation}</h3>
          </StyledDetailsContainer>
          <StyledTabsContainer>
            <StyledTab
              shown={showGeneralInstructions}
              handleTabClick={callbackGeneralInstructions}
            >
              General Instructions
            </StyledTab>
            <StyledTab
              shown={showPlayerInstructions}
              handleTabClick={callbackPlayerInstructions}
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

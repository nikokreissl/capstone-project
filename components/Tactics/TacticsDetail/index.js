import { useState } from "react";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { StyledTab, StyledTabsContainer } from "./StyledTacticsDetail";
import {
  StyledButtonComponent,
  StyledButtonLinkWrapper,
} from "../../GeneralComponents/Buttons";
import TacticsEdit from "../TacticsEdit";
import InstructionDetail from "../Instruction";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation";
import { StyledHeadline, StyledParagraph } from "../../GeneralComponents/Cards";

export default function TacticsDetail({
  tactic,
  onUpdateTactic,
  onDeleteTactic,
  onArchiveTactic,
  onDirectHome,
  path,
}) {
  const [showGeneralInstructions, setShowGeneralInstructions] = useState(true);
  function functionToBeExecutedGeneralInstructions() {
    if (showGeneralInstructions === false) {
      setShowGeneralInstructions(!showGeneralInstructions);
      setShowPlayerInstructions(!showPlayerInstructions);
    }
  }

  const [showPlayerInstructions, setShowPlayerInstructions] = useState(false);
  function functionToBeExecutedPlayerInstructions() {
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
          <StyledButtonLinkWrapper>
            <StyledLinkComponent
              href={path.includes("archive") ? "/archive/tactics" : "/tactics"}
              type="back"
            >
              Back
            </StyledLinkComponent>
            <StyledButtonComponent
              type="edit"
              functionToBeExecuted={toggleShowEdit}
            >
              Edit
            </StyledButtonComponent>
          </StyledButtonLinkWrapper>
          <PageHeadlineComponent>Tactic details</PageHeadlineComponent>
          <StyledPageDescription>
            Check out the different instructions for this formation. You can
            switch between <strong>General instructions</strong> and{" "}
            <strong>Player instructions</strong> by clicking the correpsonding
            button.
          </StyledPageDescription>
          <>
            <StyledHeadline>{tactic.name}</StyledHeadline>
            <StyledParagraph>Formation: {tactic.formation}</StyledParagraph>
          </>
          <StyledTabsContainer>
            <StyledTab
              shown={showGeneralInstructions}
              handleTabClick={functionToBeExecutedGeneralInstructions}
            >
              General Instructions
            </StyledTab>
            <StyledTab
              shown={showPlayerInstructions}
              handleTabClick={functionToBeExecutedPlayerInstructions}
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

import {
  StyledTab,
  StyledTabsContainer,
} from "../TacticsDetail/StyledTacticsDetail";
import { useState } from "react";
import { StyledButton } from "../../GeneralComponents/Buttons/StyledButton";
import styled from "styled-components";
import EditTacticGeneralForm from "./GeneralInstructionsForm";
import EditTacticPlayerForm from "./PlayerInstructionsForm";

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
        <EditTacticGeneralForm tactic={tactic} />
        <EditTacticPlayerForm tactic={tactic} />
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

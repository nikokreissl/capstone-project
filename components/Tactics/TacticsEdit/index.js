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

  console.log(tactic);

  return (
    <>
      <StyledButton onClick={onToggleEdit}>🗑️ Discard changes</StyledButton>
      <StyledForm>
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
        <StyledH3>General Instructions</StyledH3>
        <EditTacticGeneralForm tactic={tactic} />
        <StyledH3>Player Instructions</StyledH3>

        <EditTacticPlayerForm tactic={tactic} />
        <StyledSubmitButton>Submit</StyledSubmitButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledSubmitButton = styled.button`
  position: sticky;
  bottom: 10px;
`;

const StyledH3 = styled.h3`
  padding: 10px;
  background-color: lightgray;
  position: sticky;
  top: 0;
`;

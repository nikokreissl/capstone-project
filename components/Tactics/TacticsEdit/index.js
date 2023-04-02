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

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  }

  return (
    <>
      <StyledButton onClick={onToggleEdit}>🗑️ Discard changes</StyledButton>
      <StyledForm onSubmit={handleSubmit}>
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
  bottom: 50px;
`;

const StyledH3 = styled.h3`
  padding: 10px;
  background-color: lightgray;
  position: sticky;
  top: 0;
`;

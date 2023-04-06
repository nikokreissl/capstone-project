import { useState } from "react";
import {
  StyledForm,
  StyledSubmitButton,
  StyledH3,
} from "./PlayerInstructionsForm/StyledTacticsEdit";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons";
import EditTacticGeneralForm from "./GeneralInstructionsForm";
import EditTacticPlayerForm from "./PlayerInstructionsForm";

export default function TacticsEdit({
  tactic,
  onToggleEdit,
  onUpdateTactic,
  onDeleteTactic,
  onArchiveTactic,
  onClickBack,
}) {
  const [tacticName, setTacticName] = useState(tactic.name);
  function handleFormationNameInput(event) {
    setTacticName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onUpdateTactic(data, tactic.id);
    onToggleEdit();
  }

  function handleDelete(tacticId) {
    onDeleteTactic(tacticId);
    onClickBack();
  }

  function handleArchiveClick(tacticId) {
    onArchiveTactic(tacticId);
  }

  return (
    <>
      <StyledButtonComponent type="back" callback={onToggleEdit}>
        Discard changes
      </StyledButtonComponent>
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
      <StyledButtonComponent
        type="delete"
        callback={() => handleDelete(tactic.id)}
      >
        Delete
      </StyledButtonComponent>
      <StyledButtonComponent
        type="archive"
        callback={() => handleArchiveClick(tactic.id)}
        item="Tactic"
      >
        {tactic.isArchived ? "Restore" : "Archive"}
      </StyledButtonComponent>
    </>
  );
}

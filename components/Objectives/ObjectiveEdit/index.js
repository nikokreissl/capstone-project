import { useState } from "react";
import { StyledForm } from "../../GeneralComponents/CreateForm/StyledCreateForm.js";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons/index.js";

export default function EditObjective({
  onToggleEdit,
  objective,
  onUpdateObjective,
  onDeleteObjective,
  onClickBack,
  onArchiveCompetition,
}) {
  const { name, id, isArchived } = objective;

  const [objectiveName, setObjectiveName] = useState(name);

  function handleObjectiveNameChange(event) {
    setObjectiveName(event.target.value);
  }

  function handleSubmit(event) {
    onUpdateObjective(objectiveName, id);

    onToggleEdit();
  }

  function deleteObjective() {
    onClickBack();
    onDeleteObjective(id);
  }

  return (
    <>
      <StyledButtonComponent type="back" callback={onToggleEdit}>
        Discard changes
      </StyledButtonComponent>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="objective-name">Name</label>
        <input
          type="text"
          name="objective-name"
          id="objective-name"
          pattern="^(?!\s*$).+"
          required
          value={objectiveName}
          onChange={handleObjectiveNameChange}
        />
        <button>Update</button>
      </StyledForm>
      <StyledButtonComponent
        type="delete"
        callback={deleteObjective}
        item="Competition"
        crud="deleted"
      >
        Delete
      </StyledButtonComponent>
      <StyledButtonComponent
        type="archive"
        callback={() => onArchiveCompetition(id)}
        item="Objective"
        crud="archived"
      >
        {isArchived ? "Restore" : "Archive"}
      </StyledButtonComponent>
    </>
  );
}

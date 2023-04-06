import { useState } from "react";
import { StyledForm } from "../../GeneralComponents/CreateForm/StyledCreateForm.js";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons/index.js";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation/index.js";

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
      <PageHeadlineComponent>Edit objective</PageHeadlineComponent>
      <StyledPageDescription>
        Change the <strong>objective name</strong> and in- or decrease the{" "}
        <strong>number of games</strong>.
        <br />
        Your completed the objective or want to restore it? Use the button{" "}
        <strong>Archive / Restore</strong> to do so.
      </StyledPageDescription>
      <StyledForm onSubmit={(event) => event.preventDefault()}>
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
        <StyledButtonComponent type="update" callback={handleSubmit}>
          Update
        </StyledButtonComponent>
      </StyledForm>
      <StyledButtonComponent type="delete" callback={deleteObjective}>
        Delete
      </StyledButtonComponent>
      <StyledButtonComponent
        type="archive"
        callback={() => onArchiveCompetition(id)}
        item="Objective"
      >
        {isArchived ? "Restore" : "Archive"}
      </StyledButtonComponent>
    </>
  );
}

import { useState } from "react";
import {
  StyledForm,
  StyledFormLabel,
  StyledInputField,
} from "../../GeneralComponents/CreateForm/StyledCreateForm.js";
import {
  StyledButtonComponent,
  StyledButtonLinkWrapper,
} from "../../GeneralComponents/Buttons/index.js";
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

  function handleSubmit() {
    onUpdateObjective(objectiveName, id);
    onToggleEdit();
  }

  function deleteObjective() {
    onClickBack();
    onDeleteObjective(id);
  }

  function checkValidInput(input) {
    if (input.startsWith(" ")) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <StyledButtonComponent type="back" functionToBeExecuted={onToggleEdit}>
        Discard
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
        <StyledFormLabel htmlFor="objective-name">Name</StyledFormLabel>
        <StyledInputField
          type="text"
          name="objective-name"
          id="objective-name"
          pattern="^(?!\s*$).+"
          maxLength={20}
          required
          value={objectiveName}
          onChange={handleObjectiveNameChange}
        />

        <StyledButtonComponent
          type="update"
          functionToBeExecuted={handleSubmit}
          disabled={!objectiveName || !checkValidInput(objectiveName)}
        >
          Update
        </StyledButtonComponent>
      </StyledForm>
      <StyledButtonLinkWrapper>
        <StyledButtonComponent
          type="delete"
          functionToBeExecuted={deleteObjective}
        >
          Delete
        </StyledButtonComponent>
        <StyledButtonComponent
          type="archive"
          functionToBeExecuted={() => onArchiveCompetition(id)}
          item="Objective"
        >
          {isArchived ? "Restore" : "Archive"}
        </StyledButtonComponent>
      </StyledButtonLinkWrapper>
    </>
  );
}

import { useState } from "react";
import {
  StyledForm,
  StyledFormButton,
  StyledFormLabel,
  StyledFormInput,
} from "../../GeneralComponents/CreateForm/StyledCreateForm.js";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../GeneralComponents/Buttons/StyledButton";

export default function EditObjective({
  onToggleEdit,
  objective,
  onUpdateObjective,
  onDeleteObjective,
  onClickBack,
}) {
  const { name, id } = objective;

  const [objectiveName, setObjectiveName] = useState(name);

  function handleObjectiveNameChange(event) {
    setObjectiveName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateObjective(objectiveName, id);

    onToggleEdit();
  }

  function deleteObjective() {
    onClickBack();
    onDeleteObjective(id);
  }

  return (
    <>
      <StyledButton onClick={onToggleEdit}>🗑️ Discard changes</StyledButton>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormLabel htmlFor="objective-name">Name</StyledFormLabel>
        <StyledFormInput
          type="text"
          name="objective-name"
          id="objective-name"
          pattern="^(?!\s*$).+"
          required
          value={objectiveName}
          onChange={handleObjectiveNameChange}
        />
        <StyledFormButton>Update objective</StyledFormButton>
      </StyledForm>
      <StyledButtonWrapper>
        <StyledButton onClick={deleteObjective}>
          ❌ Delete competition
        </StyledButton>
        <StyledButton>
          {/* {isArchived ? "🔃 Restore from archive" : "📖 Archive competition"} */}
          📖 Archive competition
        </StyledButton>
      </StyledButtonWrapper>
    </>
  );
}

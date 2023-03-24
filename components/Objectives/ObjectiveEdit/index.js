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

export default function EditObjective({ onToggleEdit }) {
  return (
    <>
      <StyledButton onClick={onToggleEdit}>🗑️ Discard changes</StyledButton>
      <StyledForm>
        <StyledFormLabel htmlFor="objective-name">Name</StyledFormLabel>
        <StyledFormInput
          type="text"
          name="objective-name"
          id="objective-name"
          pattern="^(?!\s*$).+"
          required
        />
        <StyledFormButton>Create objective</StyledFormButton>
      </StyledForm>
    </>
  );
}

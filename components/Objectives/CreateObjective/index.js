import {
  StyledCreateForm,
  StyledCreateFormLabel,
  StyledCreateFormInput,
  StyledCreateFormButton,
  StyledCreateFormLabelInputWrapper,
} from "../../GeneralComponents/CreateForm/StyledCreateForm";
import { useRouter } from "next/router";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../../pages/_app";

export default function CreateObjectiveForm() {
  const router = useRouter();

  const [objectiveNameInput, setObjectiveNameInput] = useState("");

  const { handleAddObjective } = useContext(DataContext);

  function handleNameInput(event) {
    setObjectiveNameInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddObjective(objectiveNameInput);

    router.push("/");
  }

  return (
    <>
      <button onClick={() => router.back()}>Cancel</button>
      <StyledCreateForm onSubmit={handleSubmit}>
        <StyledCreateFormLabel htmlFor="objective-name">
          Name
        </StyledCreateFormLabel>
        <StyledCreateFormInput
          type="text"
          name="objective-name"
          id="objective-name"
          pattern="^(?!\s*$).+"
          value={objectiveNameInput}
          onChange={handleNameInput}
          required
        />
        <StyledCreateFormButton>Create objective</StyledCreateFormButton>
      </StyledCreateForm>
    </>
  );
}

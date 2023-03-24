import {
  StyledForm,
  StyledFormLabel,
  StyledFormInput,
  StyledFormButton,
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
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormLabel htmlFor="objective-name">Name</StyledFormLabel>
        <StyledFormInput
          type="text"
          name="objective-name"
          id="objective-name"
          pattern="^(?!\s*$).+"
          value={objectiveNameInput}
          onChange={handleNameInput}
          required
        />
        <StyledFormButton>Create objective</StyledFormButton>
      </StyledForm>
    </>
  );
}

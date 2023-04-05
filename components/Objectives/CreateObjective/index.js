import {
  StyledForm,
  StyledFormButton,
} from "../../GeneralComponents/CreateForm/StyledCreateForm";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
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
      <StyledLinkComponent href={"/"} type="back">
        Cancel
      </StyledLinkComponent>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="objective-name">Name</label>
        <input
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

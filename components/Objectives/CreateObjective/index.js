import { StyledForm } from "../../GeneralComponents/CreateForm/StyledCreateForm";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation";
import { useRouter } from "next/router";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../../pages/_app";

export default function CreateObjectiveForm() {
  const router = useRouter();

  const [objectiveNameInput, setObjectiveNameInput] = useState("");

  const { handleAddObjective } = useContext(DataContext);

  function checkValidInput(input) {
    if (input.startsWith(" ")) {
      return false;
    } else {
      return true;
    }
  }

  function handleNameInput(event) {
    setObjectiveNameInput(event.target.value);
  }

  function handleSubmit() {
    handleAddObjective(objectiveNameInput);

    router.push("/");
  }

  return (
    <>
      <StyledLinkComponent href={"/"} type="back">
        Cancel
      </StyledLinkComponent>
      <PageHeadlineComponent>Create Objective</PageHeadlineComponent>
      <StyledPageDescription>
        Define the name of the objective. After submit it will appear on{" "}
        <strong>Home</strong>.
      </StyledPageDescription>
      <StyledForm onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="objective-name">Name</label>
        <input
          type="text"
          name="objective-name"
          id="objective-name"
          pattern="^(?!\s*$).+"
          maxLength={50}
          value={objectiveNameInput}
          onChange={handleNameInput}
          required
        />
        <StyledButtonComponent
          type="add"
          functionToBeExecuted={handleSubmit}
          disabled={
            !objectiveNameInput || !checkValidInput(objectiveNameInput)
              ? true
              : false
          }
        >
          Create objective
        </StyledButtonComponent>
      </StyledForm>
    </>
  );
}

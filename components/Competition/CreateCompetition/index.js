import { useState, useContext } from "react";
import { DataContext } from "../../../pages/_app";
import { useRouter } from "next/router";
import {
  StyledForm,
  StyledFormLabel,
  StyledInputField,
  StyledRangeField,
  StyledFormLabelInputWrapper,
} from "../../GeneralComponents/CreateForm/StyledCreateForm.js";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../GeneralComponents/PageInformation";

export default function CreateCompetitionForm() {
  const router = useRouter();

  const [competitionNameInput, setCompetitionNameInput] = useState("");
  const [competitionGameInput, setCompetitionGameInput] = useState(1);

  function checkValidInput(input) {
    if (input.startsWith(" ")) {
      return false;
    } else {
      return true;
    }
  }

  const { handleAddCompetition } = useContext(DataContext);

  function handleNameInput(event) {
    setCompetitionNameInput(event.target.value);
  }

  function handleGameInput(event) {
    setCompetitionGameInput(Number(event.target.value));
  }

  function handleSubmit() {
    handleAddCompetition(competitionNameInput, competitionGameInput);

    router.push("/");
  }

  return (
    <>
      <StyledLinkComponent type="back" href={"/"}>
        Cancel
      </StyledLinkComponent>
      <PageHeadlineComponent>Create Competition</PageHeadlineComponent>
      <StyledPageDescription>
        Give the new competition a name and define the number of games. After
        submit it will appear on <strong>Home</strong>.
      </StyledPageDescription>
      <StyledForm onSubmit={(event) => event.preventDefault()}>
        <StyledFormLabel htmlFor="competition-name">Name</StyledFormLabel>
        <StyledInputField
          type="text"
          name="competition-name"
          id="competition-name"
          pattern="^(?!\s*$).+"
          maxLength={20}
          value={competitionNameInput}
          onChange={handleNameInput}
          required
        />
        <StyledFormLabelInputWrapper>
          <StyledFormLabel htmlFor="competition-games">
            Number of Games
          </StyledFormLabel>
          <p>{competitionGameInput}</p>
          <StyledRangeField
            type="range"
            name="competition-games"
            id="competition-games"
            value={competitionGameInput}
            onChange={handleGameInput}
            min={1}
            max={25}
            required
          />
        </StyledFormLabelInputWrapper>
        <StyledButtonComponent
          type="add"
          functionToBeExecuted={handleSubmit}
          disabled={
            !competitionNameInput || !checkValidInput(competitionNameInput)
              ? true
              : false
          }
        >
          Create
        </StyledButtonComponent>
      </StyledForm>
    </>
  );
}

import { useState, useContext } from "react";
import { DataContext } from "../../../pages/_app";
import { useRouter } from "next/router";
import {
  StyledForm,
  StyledFormLabel,
  StyledFormInput,
  StyledFormButton,
  StyledFormLabelInputWrapper,
} from "../../GeneralComponents/CreateForm/StyledCreateForm.js";

export default function CreateCompetitionForm() {
  const router = useRouter();

  const [competitionNameInput, setCompetitionNameInput] = useState("");
  const [competitionGameInput, setCompetitionGameInput] = useState(1);

  const { handleAddCompetition } = useContext(DataContext);

  function handleNameInput(event) {
    setCompetitionNameInput(event.target.value);
  }

  function handleGameInput(event) {
    setCompetitionGameInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddCompetition(competitionNameInput, competitionGameInput);

    router.push("/");
  }

  return (
    <>
      <button onClick={() => router.back()}>Cancel</button>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormLabel htmlFor="competition-name">Name</StyledFormLabel>
        <StyledFormInput
          type="text"
          name="competition-name"
          id="competition-name"
          pattern="^(?!\s*$).+"
          value={competitionNameInput}
          onChange={handleNameInput}
          required
        />
        <StyledFormLabelInputWrapper>
          <StyledFormLabel htmlFor="competition-games">
            Number of Games
          </StyledFormLabel>
          <StyledFormInput
            type="number"
            name="competition-games"
            id="competition-games"
            value={competitionGameInput}
            onChange={handleGameInput}
            min={1}
            max={100}
          />
        </StyledFormLabelInputWrapper>
        <StyledFormButton>Create competition</StyledFormButton>
      </StyledForm>
    </>
  );
}

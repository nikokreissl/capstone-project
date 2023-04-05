import { useState, useContext } from "react";
import { DataContext } from "../../../pages/_app";
import { useRouter } from "next/router";
import {
  StyledForm,
  StyledFormButton,
  StyledFormLabelInputWrapper,
} from "../../GeneralComponents/CreateForm/StyledCreateForm.js";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons";

export default function CreateCompetitionForm() {
  const router = useRouter();

  const [competitionNameInput, setCompetitionNameInput] = useState("");
  const [competitionGameInput, setCompetitionGameInput] = useState(1);

  const { handleAddCompetition } = useContext(DataContext);

  function handleNameInput(event) {
    setCompetitionNameInput(event.target.value);
  }

  function handleGameInput(event) {
    setCompetitionGameInput(Number(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddCompetition(competitionNameInput, competitionGameInput);

    router.push("/");
  }

  return (
    <>
      <StyledLinkComponent type="back" href={"/"}>
        Cancel
      </StyledLinkComponent>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="competition-name">Name</label>
        <input
          type="text"
          name="competition-name"
          id="competition-name"
          pattern="^(?!\s*$).+"
          value={competitionNameInput}
          onChange={handleNameInput}
          required
        />
        <StyledFormLabelInputWrapper>
          <label htmlFor="competition-games">Number of Games</label>
          <input
            type="number"
            name="competition-games"
            id="competition-games"
            value={competitionGameInput}
            onChange={handleGameInput}
            min={1}
            max={100}
            required
          />
        </StyledFormLabelInputWrapper>
        <button>Create</button>
      </StyledForm>
    </>
  );
}

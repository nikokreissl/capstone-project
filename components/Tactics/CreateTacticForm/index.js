import styled from "styled-components";
import { formations } from "../../../data/tactic/tactics-template";
import {
  StyledForm,
  StyledFormLabel,
  StyledInputField,
} from "../../GeneralComponents/CreateForm/StyledCreateForm";
import { useState, useContext } from "react";
import { DataContext } from "../../../pages/_app";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { StyledButtonComponent } from "../../GeneralComponents/Buttons";

export default function CreateTacticForm({ onBackToTactics }) {
  const [formationValue, setFormationValue] = useState();
  function handleFormationChange(event) {
    setFormationValue(event.target.value);
  }

  const [formationNameValue, setFormationNameValue] = useState("");
  function handleFormationNameInput(event) {
    setFormationNameValue(event.target.value);
  }

  const { handleAddTactic } = useContext(DataContext);

  function checkValidInput(input) {
    if (input.startsWith(" ")) {
      return false;
    } else {
      return true;
    }
  }

  function handleFormationSubmit() {
    const newFormation = {
      name: formationNameValue,
      formation: formationValue,
    };
    if (!formationValue) {
      alert("Please select a formation");
    } else {
      onBackToTactics();
      handleAddTactic(newFormation);
    }
  }

  return (
    <>
      <StyledLinkComponent type="back" href="/tactics">
        Cancel
      </StyledLinkComponent>
      <StyledForm onSubmit={(event) => event.preventDefault()}>
        <StyledFormLabel htmlFor="tactic-name">Tactic name</StyledFormLabel>
        <StyledInputField
          value={formationNameValue}
          onChange={handleFormationNameInput}
          name="tactic-name"
          id="tactic-name"
          pattern="^(?!\s*$).+"
          required
        />
        <StyledFormLabel htmlFor="formation">Choose Formation</StyledFormLabel>
        <StyledFormationSelect
          value={formationValue}
          onChange={handleFormationChange}
          name="formation"
          id="formation"
        >
          <option value="">Select formation...</option>
          {formations.map((formation) => (
            <option key={formation.name}>{formation.name}</option>
          ))}
        </StyledFormationSelect>
        <StyledButtonComponent
          type="add"
          functionToBeExecuted={handleFormationSubmit}
          disabled={
            !formationNameValue ||
            !checkValidInput(formationNameValue) ||
            !formationValue
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

const StyledFormationSelect = styled.select`
  padding: 5px;
  border-radius: 5px;
  background-color: var(--medium-dark);
  color: var(--light);
  &:focus-visible {
    outline: none;
  }
`;

import { formations } from "../../../data/tactic/tactics-template";
import {
  StyledFormLabel,
  StyledFormInput,
  StyledForm,
} from "../../GeneralComponents/CreateForm/StyledCreateForm";
import { useState, useContext } from "react";
import { DataContext } from "../../../pages/_app";

import { StyledDetailsLink } from "../../Competition/CompetitionCard/StyledCompetitionCard";
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

  function handleFormationSubmit(event) {
    event.preventDefault();
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
      <StyledDetailsLink href={"/tactics"}>Cancel</StyledDetailsLink>
      <StyledForm onSubmit={handleFormationSubmit}>
        <StyledFormLabel htmlFor="tactic-name">Tactic name</StyledFormLabel>
        <StyledFormInput
          value={formationNameValue}
          onChange={handleFormationNameInput}
          name="tactic-name"
          id="tactic-name"
          pattern="^(?!\s*$).+"
          required
        />
        <StyledFormLabel htmlFor="formation">Choose Formation</StyledFormLabel>
        <select
          value={formationValue}
          onChange={handleFormationChange}
          name="formation"
          id="formation"
        >
          <option value="">Select formation...</option>
          {formations.map((formation) => (
            <option key={formation.name}>{formation.name}</option>
          ))}
        </select>
        <button>Create</button>
      </StyledForm>
    </>
  );
}

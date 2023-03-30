import { formations } from "../../../data/tactic/tactics-template";
import {
  StyledFormLabel,
  StyledFormInput,
  StyledForm,
} from "../../GeneralComponents/CreateForm/StyledCreateForm";
import { useState } from "react";

import { StyledDetailsLink } from "../../Competition/CompetitionCard/StyledCompetitionCard";
export default function CreateTacticForm() {
  const [formationValue, setFormationValue] = useState();

  function handleFormationChange(event) {
    setFormationValue(event.target.value);
  }

  return (
    <>
      <StyledDetailsLink href={"/"}>Cancel</StyledDetailsLink>
      <StyledForm>
        <StyledFormLabel htmlFor="tactic-name">Tactic name</StyledFormLabel>
        <StyledFormInput name="tactic-name" id="tactic-name" />
        <StyledFormLabel htmlFor="formation">Choose Formation</StyledFormLabel>
        <select
          value={formationValue}
          onChange={handleFormationChange}
          name="create-formation"
          id="create-formation"
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

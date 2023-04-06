import { formations } from "../../../data/tactic/tactics-template";
import { StyledForm } from "../../GeneralComponents/CreateForm/StyledCreateForm";
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
        <label htmlFor="tactic-name">Tactic name</label>
        <input
          value={formationNameValue}
          onChange={handleFormationNameInput}
          name="tactic-name"
          id="tactic-name"
          pattern="^(?!\s*$).+"
          required
        />
        <label htmlFor="formation">Choose Formation</label>
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
        <StyledButtonComponent
          type="add"
          callback={handleFormationSubmit}
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

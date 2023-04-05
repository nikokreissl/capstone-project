import { formations } from "../../../data/tactic/tactics-template";
import { StyledForm } from "../../GeneralComponents/CreateForm/StyledCreateForm";
import { useState, useContext } from "react";
import { DataContext } from "../../../pages/_app";
import { StyledLinkComponent } from "../../GeneralComponents/Links";

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
      <StyledLinkComponent type="back" href="/tactics">
        Cancel
      </StyledLinkComponent>
      <StyledForm onSubmit={handleFormationSubmit}>
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
        <button>Create</button>
      </StyledForm>
    </>
  );
}

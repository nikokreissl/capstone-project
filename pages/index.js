import { useContext } from "react";
import { DataContext } from "./_app";
import CompetitionList from "../components/Competition/CompetitionList";
import ObjectiveList from "../components/Objectives/ObjectiveList";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const router = useRouter();
  const { competitions, objectives } = useContext(DataContext);

  const [selectedCreateItem, setSelectedCreateItem] = useState();

  if (!competitions || !objectives) {
    return <div>Loading...</div>;
  }

  function handleSelectItemChange(event) {
    setSelectedCreateItem(event.target.value);
  }

  function handleCreateItem(event) {
    event.preventDefault();
    console.log(selectedCreateItem);
    if (selectedCreateItem) {
      router.push(`${selectedCreateItem}/create`);
    } else if (!selectedCreateItem) {
      alert("Please select what you want to create");
    }
  }

  return (
    <main>
      <StyledCreateItemForm onSubmit={handleCreateItem}>
        <StyledCreateItemSelect
          value={selectedCreateItem}
          onChange={handleSelectItemChange}
          name="create-element"
          id="create-element"
        >
          <option value="">Select item...</option>
          <option value="competition">Competition</option>
          <option value="objective">Objective</option>
        </StyledCreateItemSelect>
        <button>Create</button>
      </StyledCreateItemForm>
      <CompetitionList competitions={competitions} headline="Competitions" />
      <ObjectiveList objectives={objectives} headline="Objectives" />
    </main>
  );
}

const StyledCreateItemForm = styled.form`
  width: 80vw;
  margin: 20px;
  display: flex;
  justify-content: center;
  gap: 0.5em;
`;

const StyledCreateItemSelect = styled.select`
  width: 30vw;
`;

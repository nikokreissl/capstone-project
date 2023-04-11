import { useContext, useState } from "react";
import { DataContext } from "./_app";
import CompetitionList from "../components/Competition/CompetitionList";
import ObjectiveList from "../components/Objectives/ObjectiveList";
import { useRouter } from "next/router";
import { StyledPageDescription } from "../components/GeneralComponents/PageInformation";
import styled from "styled-components";

export default function Home() {
  const router = useRouter();
  const path = router.asPath;
  const { competitions, objectives } = useContext(DataContext);

  const [selectedCreateItem, setSelectedCreateItem] = useState();

  if (!competitions || !objectives) {
    return <div>Loading...</div>;
  }

  const notArchivedCompetitions = competitions.filter(
    (competition) => competition.isArchived === false
  );

  const notArchivedObjectives = objectives.filter(
    (objective) => objective.isArchived === false
  );

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
    <>
      <StyledPageDescription>
        Welcome to <strong>FIFA23 Tracker</strong>!
        <br />
        Here you can track the progress of competitions and objectives and save
        your tactics and formations.
      </StyledPageDescription>

      <CompetitionList
        competitions={notArchivedCompetitions}
        headline="Competitions"
        path={path}
      />
      <ObjectiveList
        objectives={notArchivedObjectives}
        headline="Objectives"
        path={path}
      />
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
        <StyledCreateItemButton>Create</StyledCreateItemButton>
      </StyledCreateItemForm>
    </>
  );
}

const StyledCreateItemForm = styled.form`
  border-radius: 25px;
  border: 1px solid var(--light);
  background-color: var(--medium);
  width: 70vw;
  padding: 10px;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 0.5em;
  position: sticky;
  bottom: 85px;
`;

const StyledCreateItemSelect = styled.select`
  width: 40vw;
  background-color: var(--medium-dark);
  color: var(--light);
  border-radius: 25px;
  border: 1px solid var(--light-gray);
  font-size: 1.1rem;
`;

const StyledCreateItemButton = styled.button`
  border-radius: 25px;
  width: 25vw;
  background-color: var(--medium-dark);
  color: var(--light);
  border: 1px solid var(--light-gray);
  font-size: 1.1rem;
`;

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
    </>
  );
}

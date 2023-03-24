import GlobalStyle from "../styles";
import Head from "next/head";
import { givenCompetitions } from "../data/competition";
import { givenObjectives } from "../data/objectives";
import { createContext } from "react";
import Heading from "../components/GeneralComponents/Heading";
import { useCompetitions } from "../hooks/competition-hook";
import { useState } from "react";
import { uid } from "uid";

export const DataContext = createContext();

export default function App({ Component, pageProps }) {
  const {
    competitions,
    handleAddCompetition,
    handleUpdateCompetition,
    handleArchiveCompetition,
    handleDeleteCompetition,
    handleTrackNewGame,
    handleGameUpdate,
    handleGameDelete,
  } = useCompetitions(givenCompetitions);

  const [objectives, setObjectvies] = useState(givenObjectives);

  function handleAddObjective(newObjectiveName) {
    const objective = {
      id: uid(),
      isArchived: false,
      name: newObjectiveName,
      challenges: [],
    };
    setObjectvies([objective, ...objectives]);
  }

  function handleUpdateObjective(newObjectiveName, objectiveId) {
    setObjectvies(
      objectives.map((objective) =>
        objective.id === objectiveId
          ? { ...objective, name: newObjectiveName }
          : objective
      )
    );
  }

  return (
    <DataContext.Provider
      value={{
        competitions,
        handleAddCompetition,
        handleUpdateCompetition,
        handleArchiveCompetition,
        handleDeleteCompetition,
        handleGameUpdate,
        handleTrackNewGame,
        handleGameDelete,
        objectives,
        handleAddObjective,
        handleUpdateObjective,
      }}
    >
      <GlobalStyle />

      <Head>
        <title>Capstone Project</title>
      </Head>
      <Heading>FIFA23 Tracker</Heading>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}

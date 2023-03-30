import GlobalStyle from "../styles";
import Head from "next/head";
import Heading from "../components/GeneralComponents/Heading";
import Navigation from "../components/GeneralComponents/Navigation";
import { givenCompetitions } from "../data/competition";
import { givenObjectives } from "../data/objectives";
import { givenUserTactics } from "../data/tactic/user-tactics";
import { createContext, useState } from "react";
import { useCompetitions } from "../hooks/competition-hook";
import { useObjectives } from "../hooks/objective-hook";
import { getGeneralInstructions, createDefaultTactic } from "../utils/utils";
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

  const {
    objectives,
    handleAddObjective,
    handleUpdateObjective,
    handleDeleteObjective,
    handleArchiveObjective,
    handleAddChallenge,
    handleChallengeUpdate,
    handleChallengeDelete,
  } = useObjectives(givenObjectives);

  const [userTactics, setUserTactics] = useState(givenUserTactics);

  function handleAddTactic(newFormation) {
    const tactic = {
      id: uid(),
      name: newFormation.name,
      formation: newFormation.formation,
      generalInstructions: getGeneralInstructions(),
      playerInstructions: createDefaultTactic(newFormation.formation),
    };
    setUserTactics([tactic, ...userTactics]);
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
        handleDeleteObjective,
        handleArchiveObjective,
        handleAddChallenge,
        handleChallengeUpdate,
        handleChallengeDelete,
        userTactics,
        handleAddTactic,
      }}
    >
      <GlobalStyle />

      <Head>
        <title>Capstone Project</title>
      </Head>
      <Heading>FIFA23 Tracker</Heading>
      <Component {...pageProps} />
      <Navigation />
    </DataContext.Provider>
  );
}

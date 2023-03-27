import GlobalStyle from "../styles";
import Head from "next/head";
import { givenCompetitions } from "../data/competition";
import { givenObjectives } from "../data/objectives";
import { createContext } from "react";
import Heading from "../components/GeneralComponents/Heading";
import { useCompetitions } from "../hooks/competition-hook";
import { useObjectives } from "../hooks/objective-hook";

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

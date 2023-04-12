import GlobalStyle from "../styles";
import Head from "next/head";
import Heading from "../components/GeneralComponents/Heading";
import Navigation from "../components/GeneralComponents/Navigation";
import { createContext } from "react";
import { useCompetitions } from "../hooks/competition-hook";
import { useObjectives } from "../hooks/objective-hook";
import { useTactics } from "../hooks/tactic-hook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  } = useCompetitions();

  const {
    objectives,
    handleAddObjective,
    handleUpdateObjective,
    handleDeleteObjective,
    handleArchiveObjective,
    handleAddChallenge,
    handleChallengeUpdate,
    handleChallengeDelete,
    handleChallengeQuickEditUpdate,
  } = useObjectives();

  const {
    userTactics,
    handleAddTactic,
    handleUpdateTactic,
    handleDeleteTactic,
    handleArchiveTactic,
  } = useTactics();

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
        handleChallengeQuickEditUpdate,
        userTactics,
        handleAddTactic,
        handleUpdateTactic,
        handleDeleteTactic,
        handleArchiveTactic,
      }}
    >
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Heading>FIFA23 Tracker</Heading>
      <main>
        <Component {...pageProps} />
      </main>
      <Navigation />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </DataContext.Provider>
  );
}

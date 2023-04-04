import GlobalStyle from "../styles";
import Head from "next/head";
import Heading from "../components/GeneralComponents/Heading";
import Navigation from "../components/GeneralComponents/Navigation";
import { givenCompetitions } from "../data/competition";
import { givenObjectives } from "../data/objectives";
import { givenUserTactics } from "../data/tactic/user-tactics";
import { createContext } from "react";
import { useCompetitions } from "../hooks/competition-hook";
import { useObjectives } from "../hooks/objective-hook";
import { getGeneralInstructions, createDefaultTactic } from "../utils/utils";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

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
    handleChallengeQuickEditUpdate,
  } = useObjectives(givenObjectives);

  const [userTactics, setUserTactics] = useLocalStorageState("userTactics", {
    defaultValue: givenUserTactics,
  });

  function handleAddTactic(newFormation) {
    const tactic = {
      id: uid(),
      isArchived: false,
      name: newFormation.name,
      formation: newFormation.formation,
      generalInstructions: getGeneralInstructions(),
      playerInstructions: createDefaultTactic(newFormation.formation),
    };
    setUserTactics([tactic, ...userTactics]);
  }

  function handleUpdateTactic(updatedFormationData, tacticId) {
    const currentTactic = userTactics.find((tactic) => tactic.id === tacticId);

    function updateInstructions(data, instructions) {
      for (const [key, value] of Object.entries(data)) {
        for (const instruction of instructions) {
          if (key.startsWith(instruction.instructionFor)) {
            for (const detailedInstruction of instruction.detailedInstructions) {
              if (key.endsWith(detailedInstruction.instructionName)) {
                detailedInstruction.value = value;
              }
            }
          }
        }
      }
      return instructions;
    }

    const updatedGeneralInstructions = updateInstructions(
      updatedFormationData,
      currentTactic.generalInstructions
    );
    const updatedPlayerInstructions = updateInstructions(
      updatedFormationData,
      currentTactic.playerInstructions
    );
    setUserTactics(
      userTactics.map((tactic) =>
        tacticId === tactic.id
          ? {
              ...tactic,
              name: updatedFormationData.tacticname,
              generalInstructions: updatedGeneralInstructions,
              playerInstructions: updatedPlayerInstructions,
            }
          : tactic
      )
    );
  }

  function handleDeleteTactic(TacticId) {
    setUserTactics(userTactics.filter((tactic) => tactic.id !== TacticId));
  }

  function handleArchiveTactic(tacticId) {
    setUserTactics(
      userTactics.map((tactic) =>
        tacticId === tactic.id
          ? {
              ...tactic,
              isArchived: !tactic.isArchived,
            }
          : tactic
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
      <Component {...pageProps} />
      <Navigation />
    </DataContext.Provider>
  );
}

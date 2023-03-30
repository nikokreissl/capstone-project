import GlobalStyle from "../styles";
import Head from "next/head";
import Heading from "../components/GeneralComponents/Heading";
import Navigation from "../components/GeneralComponents/Navigation";
import { givenCompetitions } from "../data/competition";
import { givenObjectives } from "../data/objectives";
import { givenUserTactics } from "../data/tactic/user-tactics";
import {
  formations,
  playersDetailInstructions,
  playerInstructionValues,
} from "../data/tactic/tactics-template";
import { createContext, useState } from "react";
import { useCompetitions } from "../hooks/competition-hook";
import { useObjectives } from "../hooks/objective-hook";
import { useGetGeneralInstructions } from "../hooks/tactic-hook";
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

  const { defaultGeneralInstuctions } = useGetGeneralInstructions();

  const createFormation = "3-1-4-2";

  function createDefaultTactic(createFormation) {
    function findFormationDetails(newFormation) {
      return formations.find((formation) => newFormation === formation.name);
    }

    const formationDetails = findFormationDetails(createFormation);

    function createPlayerInstructionsArray(formationDetails) {
      return formationDetails.positions.map((position) => {
        return {
          instructionFor: position.position,
          key: position.key,
        };
      });
    }

    const playerInstructionsArray =
      createPlayerInstructionsArray(formationDetails);

    function addInstructionsToPlayerPositions(playerInstructionsArray) {
      return playerInstructionsArray.map((playerInstruction) => {
        return {
          ...playerInstruction,
          detailedInstructions: playersDetailInstructions
            .find((playerDetailInstructions) =>
              playerDetailInstructions.key.includes(playerInstruction.key)
            )
            .instructions.map((instruction) => ({
              instructionName: instruction,
            })),
        };
      });
    }

    const playerInstructionsArrayWithInstructions =
      addInstructionsToPlayerPositions(playerInstructionsArray);

    function addValuesToInstructions(playerInstructionsArrayWithInstructions) {
      const newInstructions = playerInstructionsArrayWithInstructions.map(
        (instruction) => {
          const newDetailedInstructions = instruction.detailedInstructions.map(
            (detailedInstruction) => {
              const matchingValue = playerInstructionValues.find(
                (value) =>
                  value.instructionName === detailedInstruction.instructionName
              );
              if (matchingValue) {
                return {
                  ...detailedInstruction,
                  value: matchingValue.values[0],
                };
              }
              return detailedInstruction;
            }
          );
          return {
            ...instruction,
            detailedInstructions: newDetailedInstructions,
          };
        }
      );
      console.log(newInstructions);
      return newInstructions;
    }
    addValuesToInstructions(playerInstructionsArrayWithInstructions);
  }

  createDefaultTactic(createFormation);

  function handleAddTactic(newFormation) {
    const tactic = {
      id: uid(),
      name: newFormation.name,
      formation: newFormation.formation,
      generalInstructions: defaultGeneralInstuctions,
    };
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

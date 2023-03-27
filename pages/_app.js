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

  const [objectives, setObjectives] = useState(givenObjectives);

  function handleAddObjective(newObjectiveName) {
    const objective = {
      id: uid(),
      isArchived: false,
      name: newObjectiveName,
      challenges: [],
    };
    setObjectives([objective, ...objectives]);
  }

  function handleUpdateObjective(newObjectiveName, objectiveId) {
    setObjectives(
      objectives.map((objective) =>
        objective.id === objectiveId
          ? { ...objective, name: newObjectiveName }
          : objective
      )
    );
  }

  function handleDeleteObjective(objectiveId) {
    setObjectives(
      objectives.filter((objective) => objective.id !== objectiveId)
    );
  }

  function handleArchiveObjective(objectiveId) {
    setObjectives(
      objectives.map((objective) =>
        objectiveId === objective.id
          ? { ...objective, isArchived: !objective.isArchived }
          : objective
      )
    );
  }

  function handleAddChallenge(newChallengeDetails, objectiveId) {
    const currentObjective = objectives.find(
      (objective) => objectiveId === objective.id
    );
    const newChallenge = {
      challengeId: uid(),
      description: newChallengeDetails.description,
      timesNeeded: newChallengeDetails.timesNeeded,
      timesCompleted: newChallengeDetails.timesCompleted,
    };
    const newAllChallenges = [...currentObjective.challenges, newChallenge];
    console.log(newAllChallenges);
    setObjectives(
      objectives.map((objective) =>
        objectiveId === objective.id
          ? { ...objective, challenges: newAllChallenges }
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
        handleDeleteObjective,
        handleArchiveObjective,
        handleAddChallenge,
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

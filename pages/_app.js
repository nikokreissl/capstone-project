import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { givenCompetitions } from "../data/competition";
import { createContext } from "react";
import { uid } from "uid";
import Heading from "../components/Heading";

export const DataContext = createContext();

export default function App({ Component, pageProps }) {
  const [competitions, setCompetition] = useState(givenCompetitions);

  function handleAddCompetition(competitionName, competitionGames) {
    const newCompetition = {
      name: competitionName,
      totalGames: competitionGames,
      id: uid(),
      isArchived: false,
      gamesPlayed: [],
    };
    setCompetition([newCompetition, ...competitions]);
  }

  function handleUpdateCompetition(
    competitionId,
    newCompetitionName,
    newCompetitionGames
  ) {
    const updatedCompetition = competitions.find(
      (competition) => competitionId === competition.id
    );
    if (newCompetitionGames < updatedCompetition.gamesPlayed.length) {
      alert(
        "Number of games must be greater than the current number of games added to the competition. Your changed won't be saved."
      );
    } else {
      updatedCompetition.name = newCompetitionName;
      updatedCompetition.totalGames = newCompetitionGames;
    }
  }

  return (
    <DataContext.Provider
      value={{ competitions, handleAddCompetition, handleUpdateCompetition }}
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

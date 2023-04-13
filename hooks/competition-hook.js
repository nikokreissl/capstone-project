import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export function useCompetitions() {
  const [competitions, setCompetition] = useLocalStorageState("competitions", {
    defaultValue: [],
  });

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
    setCompetition(
      competitions.map((competition) =>
        competitionId === competition.id
          ? {
              ...competition,
              name: newCompetitionName,
              totalGames: newCompetitionGames,
            }
          : competition
      )
    );
  }

  function handleArchiveCompetition(competitionId) {
    setCompetition(
      competitions.map((competition) =>
        competitionId === competition.id
          ? { ...competition, isArchived: !competition.isArchived }
          : competition
      )
    );
  }

  function handleDeleteCompetition(competitionId) {
    setCompetition(
      competitions.filter((competition) => competitionId !== competition.id)
    );
  }

  function handleGameUpdate(competitionId, gameId, newGameDetails) {
    const currentCompetition = competitions.find(
      (competition) => competition.id === competitionId
    );
    const newGameOverview = currentCompetition.gamesPlayed.map((game) =>
      game.gameId === gameId
        ? {
            ...game,
            userScore: newGameDetails.userScore,
            opponentScore: newGameDetails.opponentScore,
            userXgoals: newGameDetails.userXgoals,
            opponentXgoals: newGameDetails.opponentXgoals,
          }
        : game
    );
    setCompetition(
      competitions.map((competition) =>
        competition.id === competitionId
          ? { ...competition, gamesPlayed: newGameOverview }
          : competition
      )
    );
  }

  function handleTrackNewGame(competitionId, gameDetails) {
    const currentCompetition = competitions.find(
      (competition) => competition.id === competitionId
    );
    const newGame = {
      gameId: uid(),
      userScore: gameDetails.userScore,
      opponentScore: gameDetails.opponentScore,
      userXgoals: gameDetails.userXgoals,
      opponentXgoals: gameDetails.opponentXgoals,
    };
    const newGameOverview = [...currentCompetition.gamesPlayed, newGame];
    setCompetition(
      competitions.map((competition) =>
        competition.id === competitionId
          ? { ...competition, gamesPlayed: newGameOverview }
          : competition
      )
    );
  }

  function handleGameDelete(competitionId, gameId) {
    const currentCompetition = competitions.find(
      (competition) => competition.id === competitionId
    );
    const updatedCurrentCompetitioGames = currentCompetition.gamesPlayed.filter(
      (game) => game.gameId !== gameId
    );
    setCompetition(
      competitions.map((competition) =>
        competition.id === competitionId
          ? { ...competition, gamesPlayed: updatedCurrentCompetitioGames }
          : competition
      )
    );
  }
  return {
    competitions,
    handleAddCompetition,
    handleUpdateCompetition,
    handleArchiveCompetition,
    handleDeleteCompetition,
    handleTrackNewGame,
    handleGameUpdate,
    handleGameDelete,
  };
}

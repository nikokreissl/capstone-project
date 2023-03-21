import styled from "styled-components";

export default function CompetitionDetail({
  onClickBack,
  onToggleEdit,
  competition,
}) {
  const competitionWins = competition.gamesPlayed.filter(
    (game) => game.userScore > game.opponentScore
  );

  const competitionLoses = competition.gamesPlayed.filter(
    (game) => game.userScore < game.opponentScore
  );

  const competitionGames = competition.gamesPlayed;
  const reversedCompetitionGames = [...competitionGames].reverse();

  return (
    <StyledCompetitionDetailWrapper>
      <button onClick={onClickBack}>🔙 Back</button>
      <button onClick={onToggleEdit}>⚙️ Edit</button>
      <h2>{competition.name}</h2>
      <h3>Details</h3>
      <p>
        Wins: {competitionWins.length} / Loses: {competitionLoses.length}
      </p>
      <p>Remaining games: {competition.totalGames - competitionGames.length}</p>
      <button>Track Game</button>
      <ul>
        {reversedCompetitionGames.map((game) => (
          <li key={game.gameId}>
            Game{" "}
            {reversedCompetitionGames.length -
              reversedCompetitionGames.indexOf(game)}{" "}
            - {game.userScore}:{game.opponentScore}
            <button>Edit game</button>
          </li>
        ))}
      </ul>
    </StyledCompetitionDetailWrapper>
  );
}

const StyledCompetitionDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

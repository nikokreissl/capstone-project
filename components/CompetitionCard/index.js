export default function CompetitionCard({ competition, onViewDetails }) {
  const competitionWins = competition?.gamesPlayed.filter(
    (game) => game.userScore > game.opponentScore
  );

  const competitionLoses = competition?.gamesPlayed.filter(
    (game) => game.userScore < game.opponentScore
  );
  return (
    <article>
      <h2>{competition?.name}</h2>
      <p>
        Record: Wins {competitionWins.length} / Loses {competitionLoses.length}
      </p>
      <p>
        Remaining Games:{" "}
        {competition?.totalGames - competition?.gamesPlayed.length}
      </p>
      <button onClick={onViewDetails}>View Details</button>
    </article>
  );
}

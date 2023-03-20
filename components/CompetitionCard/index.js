import Link from "next/link";

export default function CompetitionCard({ competition }) {
  const competitionWins = competition?.gamesPlayed.filter(
    (game) => game.userScore > game.opponentScore
  );

  const competitionLoses = competition.gamesPlayed.filter(
    (game) => game.userScore < game.opponentScore
  );
  return (
    <article>
      <h2>{competition.name}</h2>
      <p>
        Record: Wins {competitionWins.length} / Loses {competitionLoses.length}
      </p>
      <p>
        Remaining Games:{" "}
        {competition?.totalGames - competition.gamesPlayed.length}
      </p>
      <Link href={`/competition/${competition.id}`}>View Details</Link>
    </article>
  );
}

import styled from "styled-components";
import { useRouter } from "next/router";

export default function CompetitionCard({ competition }) {
  const router = useRouter();
  function handleViewDetailsClick() {
    router.push(`/competition/${competition.id}`);
  }

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
      <button onClick={handleViewDetailsClick}>View Details</button>
    </article>
  );
}

const styledCompetitionCard = styled.article``;

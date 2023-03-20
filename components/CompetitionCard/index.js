import styled from "styled-components";
import { useRouter } from "next/router";

export default function CompetitionCard({ competition }) {
  const router = useRouter();

  function handleViewDetails() {
    router.push(`/competition/${competition.id}`);
  }

  return (
    <article>
      <h2>{competition.name}</h2>
      <p>Record: X Wins / X Losses</p>
      <p>
        Remaining Games:{" "}
        {competition.totalGames - competition.gamesPlayed.length}
      </p>
      <button onClick={handleViewDetails}>View Details</button>
    </article>
  );
}

const styledCompetitionCard = styled.article``;

import styled from "styled-components";

export default function CompetitionCard({ competition }) {
  return (
    <article>
      <h2>{competition.name}</h2>
      <p>Record: X Wins / X Losses</p>
      <p>Remaining Games: {competition.totalGames}</p>
      <button>View Details</button>
    </article>
  );
}

const styledCompetitionCard = styled.article``;

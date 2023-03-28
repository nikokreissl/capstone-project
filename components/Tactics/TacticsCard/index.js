import {
  StyledArticle,
  StyledDetailsLink,
} from "../../Competition/CompetitionCard/StyledCompetitionCard";

export default function TacticCard({ tactic, path }) {
  if (!tactic) {
    return <p>Loading...</p>;
  }

  return (
    <StyledArticle>
      <h3>{tactic.name}</h3>
      <h4>Formation: {tactic.formation}</h4>
      <StyledDetailsLink href={`/tactics/${tactic.id}/?${path}`}>
        View Details
      </StyledDetailsLink>
    </StyledArticle>
  );
}

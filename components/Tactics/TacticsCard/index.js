import {
  StyledArticle,
  StyledDetailsLink,
} from "../../Competition/CompetitionCard/StyledCompetitionCard";

export default function TacticCard({ tactic }) {
  if (!tactic) {
    return <p>Loading...</p>;
  }

  return (
    <StyledArticle>
      <h3>{tactic.name}</h3>
      <h4>{tactic.formation}</h4>
      <StyledDetailsLink href={"/"}>View Details</StyledDetailsLink>
    </StyledArticle>
  );
}

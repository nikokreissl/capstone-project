import { StyledArticle } from "../../Competition/CompetitionCard/StyledCompetitionCard";
import { StyledLinkComponent } from "../../GeneralComponents/Links";

export default function TacticCard({ tactic, path }) {
  if (!tactic) {
    return <p>Loading...</p>;
  }

  return (
    <StyledArticle>
      <h3>{tactic.name}</h3>
      <h4>Formation: {tactic.formation}</h4>
      <StyledLinkComponent type="view" href={`/tactics/${tactic.id}/?${path}`}>
        View Details
      </StyledLinkComponent>
    </StyledArticle>
  );
}

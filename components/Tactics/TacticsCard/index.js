import {
  StyledContainer,
  StyledHeadline,
  StyledParagraph,
} from "../../GeneralComponents/Cards";
import { StyledLinkComponent } from "../../GeneralComponents/Links";

export default function TacticCard({ tactic, path }) {
  if (!tactic) {
    return <p>Loading...</p>;
  }

  return (
    <StyledContainer>
      <StyledHeadline>{tactic.name}</StyledHeadline>
      <StyledParagraph>Formation: {tactic.formation}</StyledParagraph>
      <StyledLinkComponent type="view" href={`/tactics/${tactic.id}/?${path}`}>
        View Details
      </StyledLinkComponent>
    </StyledContainer>
  );
}

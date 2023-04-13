import styled from "styled-components";
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
      <StyledTacticsContainer>
        <h4>Formation</h4>
        <StyledTacticsFormationText>
          {tactic.formation}
        </StyledTacticsFormationText>
      </StyledTacticsContainer>
      <StyledLinkComponent type="view" href={`/tactics/${tactic.id}/?${path}`}>
        View Details
      </StyledLinkComponent>
    </StyledContainer>
  );
}

export const StyledTacticsContainer = styled.div`
  margin: 10px;
`;

export const StyledTacticsFormationText = styled.p`
  font-weight: bold;
  color: var(--orange);
  font-size: 1.2rem;
  margin-left: 10px;
  margin-top: 10px;
`;

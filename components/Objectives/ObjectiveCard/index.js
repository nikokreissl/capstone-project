import { StyledArticle, StyledDetailsLink } from "./StyledObjectiveCard.js";

export default function ObjectiveCard({ objective }) {
  console.log(objective);
  return (
    <StyledArticle>
      <h3>{objective.name}</h3>
      <p>Challenges finished: X</p>
      <StyledDetailsLink href={"/"}>View Details</StyledDetailsLink>
    </StyledArticle>
  );
}

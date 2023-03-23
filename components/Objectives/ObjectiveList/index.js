import {
  StyledCompetitionList,
  StyledHomeContainer,
  StyledHomeItemHeadline,
} from "../../Competition/CompetitionList/StylesCompetitionList";

export default function ObjectiveList({ headline }) {
  return (
    <StyledHomeContainer>
      <StyledHomeItemHeadline>{headline}</StyledHomeItemHeadline>
      <hr />
    </StyledHomeContainer>
  );
}

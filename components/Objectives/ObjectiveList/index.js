import {
  StyledHomeContainer,
  StyledHomeItemHeadline,
  StyledHomeList,
} from "../../Competition/CompetitionList/StylesCompetitionList";
import EmptyState from "../../GeneralComponents/Empty-State";
import ObjectiveCard from "../ObjectiveCard";

export default function ObjectiveList({ objectives, headline }) {
  return (
    <StyledHomeContainer>
      <StyledHomeItemHeadline>{headline}</StyledHomeItemHeadline>
      <hr />
      {objectives.length < 1 ? (
        <EmptyState itemName="objective" href="/objective/create" />
      ) : (
        <StyledHomeList>
          {objectives.map((objective) => (
            <li key={objective.id}>
              <ObjectiveCard objective={objective} />
            </li>
          ))}
        </StyledHomeList>
      )}
    </StyledHomeContainer>
  );
}

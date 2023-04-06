import {
  StyledHomeContainer,
  StyledHomeList,
} from "../../Competition/CompetitionList/StylesCompetitionList";
import { PageHeadlineComponent } from "../../GeneralComponents/PageInformation";
import EmptyState from "../../GeneralComponents/Empty-State";
import ObjectiveCard from "../ObjectiveCard";

export default function ObjectiveList({ objectives, headline, path }) {
  return (
    <StyledHomeContainer>
      <PageHeadlineComponent>{headline}</PageHeadlineComponent>
      {objectives.length < 1 ? (
        <EmptyState itemName="objective" href="/objective/create" path={path} />
      ) : (
        <StyledHomeList>
          {objectives.map((objective) => (
            <li key={objective.id}>
              <ObjectiveCard objective={objective} path={path} />
            </li>
          ))}
        </StyledHomeList>
      )}
    </StyledHomeContainer>
  );
}

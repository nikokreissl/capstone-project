import { StyledList } from "../../GeneralComponents/List";
import {
  PageHeadlineComponent,
  PageHeadlineComponentWithCreate,
} from "../../GeneralComponents/PageInformation";
import EmptyState from "../../GeneralComponents/Empty-State";
import ObjectiveCard from "../ObjectiveCard";

export default function ObjectiveList({ objectives, headline, path }) {
  return (
    <>
      {!path.includes("archive") ? (
        <PageHeadlineComponentWithCreate href="objectives/create">
          {headline}
        </PageHeadlineComponentWithCreate>
      ) : (
        <PageHeadlineComponent>{headline}</PageHeadlineComponent>
      )}
      {objectives.length < 1 ? (
        <EmptyState itemName="objective" path={path} />
      ) : (
        <StyledList>
          {objectives.map((objective) => (
            <li key={objective.id}>
              <ObjectiveCard objective={objective} path={path} />
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
}

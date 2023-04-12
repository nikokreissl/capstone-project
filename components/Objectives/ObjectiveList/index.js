import { StyledList } from "../../GeneralComponents/List";
import { PageHeadlineComponentWithCreate } from "../../GeneralComponents/PageInformation";
import EmptyState from "../../GeneralComponents/Empty-State";
import ObjectiveCard from "../ObjectiveCard";

export default function ObjectiveList({ objectives, headline, path }) {
  return (
    <>
      <PageHeadlineComponentWithCreate href="objective/create">
        {headline}
      </PageHeadlineComponentWithCreate>
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

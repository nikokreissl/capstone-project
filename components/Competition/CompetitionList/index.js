import { StyledList } from "../../GeneralComponents/List";
import {
  PageHeadlineComponent,
  PageHeadlineComponentWithCreate,
} from "../../GeneralComponents/PageInformation";
import CompetitionCard from "../CompetitionCard";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function CompetitionList({ competitions, headline, path }) {
  return (
    <>
      {!path.includes("archive") ? (
        <PageHeadlineComponentWithCreate href="competition/create">
          {headline}
        </PageHeadlineComponentWithCreate>
      ) : (
        <PageHeadlineComponent>{headline}</PageHeadlineComponent>
      )}
      {competitions.length < 1 ? (
        <EmptyState itemName="competition" path={path} />
      ) : (
        <StyledList>
          {competitions.map((competition) => (
            <li key={competition.id}>
              <CompetitionCard competition={competition} path={path} />
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
}

import { StyledList } from "../../GeneralComponents/List";
import { PageHeadlineComponent } from "../../GeneralComponents/PageInformation";
import CompetitionCard from "../CompetitionCard";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function CompetitionList({ competitions, headline, path }) {
  return (
    <>
      <PageHeadlineComponent>{headline}</PageHeadlineComponent>
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

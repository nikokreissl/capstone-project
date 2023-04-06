import { StyledHomeList, StyledHomeContainer } from "./StylesCompetitionList";
import { PageHeadlineComponent } from "../../GeneralComponents/PageInformation";
import CompetitionCard from "../CompetitionCard";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function CompetitionList({ competitions, headline, path }) {
  return (
    <StyledHomeContainer>
      <PageHeadlineComponent>{headline}</PageHeadlineComponent>
      {competitions.length < 1 ? (
        <EmptyState
          itemName="competition"
          href="competition/create"
          path={path}
        />
      ) : (
        <StyledHomeList>
          {competitions.map((competition) => (
            <li key={competition.id}>
              <CompetitionCard competition={competition} path={path} />
            </li>
          ))}
        </StyledHomeList>
      )}
    </StyledHomeContainer>
  );
}

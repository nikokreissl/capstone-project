import {
  StyledHomeList,
  StyledHomeContainer,
  StyledHomeItemHeadline,
} from "./StylesCompetitionList";
import CompetitionCard from "../CompetitionCard";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function CompetitionList({ competitions, headline, path }) {
  return (
    <StyledHomeContainer>
      <StyledHomeItemHeadline>{headline}</StyledHomeItemHeadline>
      <hr />
      {competitions.length < 1 ? (
        <EmptyState itemName="competition" href="competition/create" />
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

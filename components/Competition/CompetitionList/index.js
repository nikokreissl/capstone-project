import {
  StyledCompetitionList,
  StyledHomeContainer,
  StyledHomeItemHeadline,
} from "./StylesCompetitionList";
import CompetitionCard from "../CompetitionCard";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function HomeItem({ competitions, headline }) {
  return (
    <StyledHomeContainer>
      <StyledHomeItemHeadline>{headline}</StyledHomeItemHeadline>
      <hr />
      {competitions.length < 1 ? (
        <EmptyState itemName="competition" href="competition/create" />
      ) : (
        <StyledCompetitionList>
          {competitions.map((competition) => (
            <li key={competition.id}>
              <CompetitionCard competition={competition} />
            </li>
          ))}
        </StyledCompetitionList>
      )}
    </StyledHomeContainer>
  );
}

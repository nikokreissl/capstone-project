import {
  StyledHomeList,
  StyledHomeContainer,
  StyledHomeItemHeadline,
} from "../../Competition/CompetitionList/StylesCompetitionList";
import TacticCard from "../TacticsCard";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function TacticsList({ headline, tactics }) {
  return (
    <StyledHomeContainer>
      <StyledHomeItemHeadline>{headline}</StyledHomeItemHeadline>
      <hr />
      <StyledHomeList>
        {tactics.map((tactic) => (
          <li key={tactic.id}>
            <TacticCard tactic={tactic} />
          </li>
        ))}
      </StyledHomeList>
    </StyledHomeContainer>
  );
}

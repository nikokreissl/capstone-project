import {
  StyledHomeList,
  StyledHomeContainer,
} from "../../Competition/CompetitionList/StylesCompetitionList";
import { PageHeadlineComponent } from "../../GeneralComponents/PageInformation";
import TacticCard from "../TacticsCard";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function TacticsList({ headline, tactics, path }) {
  return (
    <StyledHomeContainer>
      <PageHeadlineComponent>{headline}</PageHeadlineComponent>
      {tactics.length < 1 ? (
        <EmptyState itemName="tactic" href="/tactics/create" path={path} />
      ) : (
        <StyledHomeList>
          {tactics.map((tactic) => (
            <li key={tactic.id}>
              <TacticCard tactic={tactic} path={path} />
            </li>
          ))}
        </StyledHomeList>
      )}
    </StyledHomeContainer>
  );
}

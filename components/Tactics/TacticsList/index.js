import { StyledList } from "../../GeneralComponents/List";
import { PageHeadlineComponentWithCreate } from "../../GeneralComponents/PageInformation";
import TacticCard from "../TacticsCard";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function TacticsList({ headline, tactics, path }) {
  return (
    <>
      <PageHeadlineComponentWithCreate href="tactics/create">
        {headline}
      </PageHeadlineComponentWithCreate>
      {tactics.length < 1 ? (
        <EmptyState itemName="tactic" path={path} />
      ) : (
        <StyledList>
          {tactics.map((tactic) => (
            <li key={tactic.id}>
              <TacticCard tactic={tactic} path={path} />
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
}

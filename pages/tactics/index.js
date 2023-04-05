import TacticsList from "../../components/Tactics/TacticsList";
import { StyledLinkComponent } from "../../components/GeneralComponents/Links";
import { useContext } from "react";
import { DataContext } from "../_app";
import { useRouter } from "next/router";

export default function TacticsOverviewPage() {
  const { userTactics } = useContext(DataContext);
  const router = useRouter();
  const path = router.asPath;

  const notArchivedTactics = userTactics.filter(
    (tactic) => tactic.isArchived === false
  );

  return (
    <main>
      <StyledLinkComponent type="add" href={"tactics/create"}>
        Create
      </StyledLinkComponent>
      <TacticsList
        headline="Tactics"
        tactics={notArchivedTactics}
        path={path}
      />
    </main>
  );
}

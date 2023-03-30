import TacticsList from "../../components/Tactics/TacticsList";
import { StyledDetailsLink } from "../../components/Competition/CompetitionCard/StyledCompetitionCard";
import { useContext } from "react";
import { DataContext } from "../_app";
import { useRouter } from "next/router";

export default function TacticsOverviewPage() {
  const { userTactics } = useContext(DataContext);
  const router = useRouter();
  const path = router.asPath;

  return (
    <main>
      <StyledDetailsLink href={"tactics/create"}>
        Create new tactic
      </StyledDetailsLink>
      <TacticsList headline="Tactics" tactics={userTactics} path={path} />
    </main>
  );
}

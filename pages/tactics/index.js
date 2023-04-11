import styled from "styled-components";
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
    <>
      <TacticsList
        headline="Tactics"
        tactics={notArchivedTactics}
        path={path}
      />
      <StyledCreateTacticWrapper>
        <StyledLinkComponent type="add" href={"tactics/create"}>
          Create
        </StyledLinkComponent>
      </StyledCreateTacticWrapper>
    </>
  );
}

const StyledCreateTacticWrapper = styled.div`
  border-radius: 25px;
  background-color: var(--medium-dark);
  // border: 1px solid var(--light);
  // padding: 10px;
  margin: auto;
  width: 150px;
  position: sticky;
  bottom: 85px;
`;

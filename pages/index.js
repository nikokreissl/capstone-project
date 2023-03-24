import { useContext } from "react";
import { DataContext } from "./_app";
import { StyledDetailsLink } from "../components/Competition/CompetitionCard/StyledCompetitionCard";
import CompetitionList from "../components/Competition/CompetitionList";
import ObjectiveList from "../components/Objectives/ObjectiveList";
import { StyledButtonWrapper } from "../components/GeneralComponents/Buttons/StyledButton";

export default function Home() {
  const { competitions, objectives } = useContext(DataContext);

  if (!competitions || !objectives) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main>
        <StyledButtonWrapper>
          <StyledDetailsLink href={"/competition/create"}>
            Create new competition
          </StyledDetailsLink>
          <StyledDetailsLink href={"/competition/create"}>
            Create new objective
          </StyledDetailsLink>
        </StyledButtonWrapper>
        <CompetitionList competitions={competitions} headline="Competitions" />
        <ObjectiveList objectives={objectives} headline="Objectives" />
      </main>
    </>
  );
}

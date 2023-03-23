import { useContext } from "react";
import { DataContext } from "./_app";
import { StyledDetailsLink } from "../components/Competition/CompetitionCard/StyledCompetitionCard";
import CompetitionList from "../components/Competition/CompetitionList";
import ObjectiveList from "../components/Objectives/ObjectiveList";

export default function Home() {
  const { competitions } = useContext(DataContext);

  if (!competitions) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main>
        <StyledDetailsLink href={"/competition/create"}>
          Create new competition
        </StyledDetailsLink>
        <CompetitionList competitions={competitions} headline="Competitions" />
        <ObjectiveList headline="Objectives" />
      </main>
    </>
  );
}

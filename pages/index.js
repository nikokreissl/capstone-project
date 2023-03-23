import { useContext } from "react";
import { DataContext } from "./_app";
import { StyledDetailsLink } from "../components/Competition/CompetitionCard/StyledCompetitionCard";
import HomeItem from "../components/Competition/CompetitionList";

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
        <HomeItem competitions={competitions} headline="Competitions" />
      </main>
    </>
  );
}

import CompetitionCard from "../components/Competition/CompetitionCard";
import { useContext } from "react";
import { DataContext } from "./_app";
import { StyledDetailsLink } from "../components/Competition/CompetitionCard/StyledCompetitionCard";
import { StyledCompetitionList } from "../components/Competition/CompetitionList/StylesCompetitionList";

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
        <StyledCompetitionList>
          {competitions.map((competition) => (
            <li key={competition.id}>
              <CompetitionCard competition={competition} />
            </li>
          ))}
        </StyledCompetitionList>
      </main>
    </>
  );
}

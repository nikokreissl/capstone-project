import { useContext } from "react";
import { DataContext } from "./_app";
import CompetitionList from "../components/Competition/CompetitionList";
import { useRouter } from "next/router";
import { StyledPageDescription } from "../components/GeneralComponents/PageInformation";

export default function Home() {
  const router = useRouter();
  const path = router.asPath;
  const { competitions } = useContext(DataContext);

  if (!competitions) {
    return <div>Loading...</div>;
  }

  const notArchivedCompetitions = competitions.filter(
    (competition) => competition.isArchived === false
  );

  return (
    <>
      <StyledPageDescription>
        Welcome to <strong>FIFA23 Tracker</strong>!
        <br />
        Here you can track the progress of competitions and objectives and save
        your tactics and formations.
      </StyledPageDescription>
      <CompetitionList
        competitions={notArchivedCompetitions}
        headline="Competitions"
        path={path}
      />
    </>
  );
}

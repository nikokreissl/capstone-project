import CompetitionList from "../../components/Competition/CompetitionList";
import { StyledLinkComponent } from "../../components/GeneralComponents/Links";
import { useContext } from "react";
import { DataContext } from "../_app";
import { useRouter } from "next/router";

export default function ArchiveCompetitionsPage() {
  const router = useRouter();
  const path = router.asPath;

  const { competitions } = useContext(DataContext);

  if (!competitions) {
    return <div>Loading...</div>;
  }

  const archivedCompetitions = competitions.filter(
    (competition) => competition.isArchived === true
  );

  return (
    <main>
      <StyledLinkComponent
        href={path.includes("archive") ? "/archive" : "/"}
        type="back"
      >
        Back
      </StyledLinkComponent>
      <CompetitionList
        competitions={archivedCompetitions}
        headline="Competitions"
        path={path}
      />
    </main>
  );
}

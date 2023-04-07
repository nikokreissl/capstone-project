import ArchiveCard from "../../components/Archive/ArchiveCards";
import {
  PageHeadlineComponent,
  StyledPageDescription,
} from "../../components/GeneralComponents/PageInformation";
import { useContext } from "react";
import { DataContext } from "../_app";

export default function ArchivePage() {
  const { objectives, competitions, userTactics } = useContext(DataContext);
  return (
    <>
      <StyledPageDescription>
        Inside the archive you can store everything which is not up-to-date or
        not needed at the moment. Any item can be <strong>restored</strong> at
        anytime again.
      </StyledPageDescription>
      <PageHeadlineComponent>Archive</PageHeadlineComponent>
      <ArchiveCard
        itemName="Competitions"
        object={competitions}
        href="archive/competitions"
      />
      <ArchiveCard
        itemName="Objectives"
        object={objectives}
        href="archive/objectives"
      />
      <ArchiveCard
        itemName="Tactics"
        object={userTactics}
        href="archive/tactics"
      />
    </>
  );
}

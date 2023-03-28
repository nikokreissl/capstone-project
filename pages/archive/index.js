import ArchiveCard from "../../components/Archive/ArchiveCards";
import { useContext } from "react";
import { DataContext } from "../_app";

export default function ArchivePage() {
  const { objectives, competitions } = useContext(DataContext);
  return (
    <main>
      <h2>Archive</h2>
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
    </main>
  );
}

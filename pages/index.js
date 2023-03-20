import Heading from "../components/Heading";
import CompetitionCard from "../components/CompetitionCard";
import { useContext } from "react";
import { DataContext } from "./_app";

export default function Home() {
  const competitions = useContext(DataContext);

  return (
    <>
      <Heading>FIFA23 Tracker</Heading>
      <main>
        <ul>
          {competitions.map((competition) => (
            <li key={competition.id}>
              <CompetitionCard competition={competition} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

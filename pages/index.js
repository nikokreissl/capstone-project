import Heading from "../components/Heading";
import CompetitionCard from "../components/CompetitionCard";
import { competitions } from "../data/competition";

export default function Home() {
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

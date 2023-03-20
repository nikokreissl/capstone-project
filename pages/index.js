import Heading from "../components/Heading";
import CompetitionCard from "../components/CompetitionCard";
import { competitions } from "../data/competition";

export default function Home() {
  return (
    <>
      <Heading>🔱 Nikos Capstone Project🔱</Heading>
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

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
            <CompetitionCard key={competition.id} competition={competition} />
          ))}
        </ul>
      </main>
    </>
  );
}

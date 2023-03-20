import Heading from "../components/Heading";
import CompetitionCard from "../components/CompetitionCard";
import { competitions } from "../data/competition";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function handleViewDetailsClick(competitionId) {
    router.push(`/competition/${competitionId}`);
  }
  return (
    <>
      <Heading>FIFA23 Tracker</Heading>
      <main>
        <ul>
          {competitions.map((competition) => (
            <li key={competition.id}>
              <CompetitionCard
                competition={competition}
                onViewDetails={() => handleViewDetailsClick(competition.id)}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

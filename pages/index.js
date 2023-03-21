import CompetitionCard from "../components/Competition/CompetitionCard";
import { useContext } from "react";
import { DataContext } from "./_app";
import Link from "next/link";

export default function Home() {
  const { competitions } = useContext(DataContext);

  if (!competitions) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main>
        <Link href={"/competition/create"}>Create new competition</Link>
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

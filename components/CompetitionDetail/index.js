import { useRouter } from "next/router";

export default function CompetitionDetail({ competition }) {
  const router = useRouter();
  console.log(router);

  function handleClickBack() {
    router.back();
  }
  return (
    <main>
      <button onClick={handleClickBack}>🔙 Back</button>
      <button>⚙️ Edit</button>
      <h2>Competition Name</h2>
      <h3>Details</h3>
      <p>Wins: X / Loses: X</p>
      <button>Track Game</button>
      <ul>
        <li>Game 1</li>
        <li>Game 2</li>
        <li>Game 3</li>
        <li>Game 4</li>
      </ul>
    </main>
  );
}

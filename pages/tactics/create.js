import CreateTacticForm from "../../components/Tactics/CreateTacticForm";
import { useRouter } from "next/router";

export default function CreateNewTacticPage() {
  const router = useRouter();

  function handleBackToTactics() {
    router.push("/tactics");
  }
  return (
    <main>
      <CreateTacticForm onBackToTactics={handleBackToTactics} />
    </main>
  );
}

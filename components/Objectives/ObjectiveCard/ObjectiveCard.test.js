import { render, screen } from "@testing-library/react";
import ObjectiveCard from ".";

test("Objective Card renders the details correctly", () => {
  const objective = {
    id: "6T8pK9rLqJ",
    name: "Objective Name",
    isArchived: false,
    challenges: [
      {
        challengeId: "jhdo482",
        description: "Keep 3 clean sheets",
        timesNeeded: 3,
        timesCompleted: 1,
      },
      {
        challengeId: "Laio422",
        description: "Score 5 goals",
        timesNeeded: 5,
        timesCompleted: 3,
      },
      {
        challengeId: "6T8pK9rLqJ",
        description: "Score in 5 wins twice with a german player",
        timesNeeded: 5,
        timesCompleted: 3,
      },
    ],
  };
  render(<ObjectiveCard objective={objective} />);

  const objectiveName = screen.getByRole("heading", { name: "Objective Name" });
  const numberOfChallenges = screen.getByText("Challenges completed: 0 / 3");
});

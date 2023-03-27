import { render, screen } from "@testing-library/react";
import ObjectiveDetail from ".";

describe("Objective Detail Component", () => {
  const objective = {
    id: "6T8pK9rLqJ",
    name: "Objective #1",
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

  test("All buttons are correctly rendered on Objective detail page", () => {
    render(<ObjectiveDetail objective={objective} />);
    const backButton = screen.getByRole("button", { name: "🔙 Back" });
    const editButton = screen.getByRole("button", { name: "⚙️ Edit" });
    const addButton = screen.getByRole("button", { name: "Add challenge" });

    expect(backButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("Renders the correct objective information", () => {
    render(<ObjectiveDetail objective={objective} />);
    const objectiveName = screen.getByRole("heading", { name: "Objective #1" });
    const challenges = screen.getByText("Challenges completed: 0 / 3");

    expect(objectiveName).toBeInTheDocument();
    expect(challenges).toBeInTheDocument();
  });

  test("Renders the current amount of challenges", () => {
    render(<ObjectiveDetail objective={objective} />);
    const challenges = screen.getAllByRole("listitem");
    expect(challenges.length).toBe(3);
  });
});

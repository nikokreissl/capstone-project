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
    render(
      <ObjectiveDetail objective={objective} path={"/objective/6T8pK9rLqJ"} />
    );
    const links = screen.getAllByRole("link");
    const button = screen.getAllByRole("button");

    expect(links.length).toBe(5);
    expect(button.length).toBe(7);
  });

  test("Renders the correct objective information", () => {
    render(
      <ObjectiveDetail objective={objective} path={"/objective/6T8pK9rLqJ"} />
    );
    const objectiveName = screen.getByRole("heading", {
      name: "Objective details",
    });

    expect(objectiveName).toBeInTheDocument();
  });

  test("Renders the current amount of challenges", () => {
    render(
      <ObjectiveDetail objective={objective} path={"/objective/6T8pK9rLqJ"} />
    );
    const challenges = screen.getAllByRole("listitem");
    expect(challenges.length).toBe(3);
  });
});

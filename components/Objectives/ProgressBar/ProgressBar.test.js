import { render, screen } from "@testing-library/react";
import ProgressBarComponent from ".";

describe("ProgressBarComponent", () => {
  test(`shows empty state "No challenge added" if no challenges have been added to objevtive`, () => {
    render(
      <ProgressBarComponent
        type="objective"
        challengesNeeded={0}
        challengesCompleted={0}
      />
    );

    const progressBarText = screen.getByText("No challenges added yet");
    expect(progressBarText).toBeInTheDocument();
  });

  test("Renders the text for challenge progress correctly", () => {
    render(
      <ProgressBarComponent
        type="challenge"
        challengesNeeded={10}
        challengesCompleted={6}
        challengeNumber={2}
      />
    );
    const progressBarText = screen.getByText("Completed: 6 / 10");

    expect(progressBarText).toBeInTheDocument();
  });
});

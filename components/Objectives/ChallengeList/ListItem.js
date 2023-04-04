import {
  StyledChallengeListItem,
  StyledChallengeDescription,
  StyledChallengeQuickEditWrapper,
  StyledChallengeProgress,
  StyleChallengeEditButton,
} from "./StyledChallengeList";
import { useState } from "react";

export default function ChallengeListItemComponent({
  challengeNumber,
  challenge,
  onEditChallengeClick,
  onChallengeQuickEditUpdate,
  objectiveId,
}) {
  const { description, challengeId, timesNeeded, timesCompleted } = challenge;

  function handleTimesCompletedUpdate(operation) {
    let newTimesCompleted = timesCompleted;
    if (operation === "add") {
      newTimesCompleted += 1;
    } else if (operation === "subtract") {
      newTimesCompleted -= 1;
    }

    onChallengeQuickEditUpdate(challengeId, objectiveId, newTimesCompleted);
  }

  return (
    <StyledChallengeListItem challengeNumber={challengeNumber}>
      <StyledChallengeDescription>{description}</StyledChallengeDescription>
      <StyledChallengeQuickEditWrapper>
        <StyledChallengeProgress>
          {timesCompleted} / {timesNeeded}
        </StyledChallengeProgress>
        <button
          onClick={() => handleTimesCompletedUpdate("add")}
          disabled={timesCompleted === timesNeeded && true}
        >
          +1
        </button>
        <button
          onClick={() => handleTimesCompletedUpdate("subtract")}
          disabled={timesCompleted < 1 && true}
        >
          -1
        </button>
        <StyleChallengeEditButton
          onClick={() => onEditChallengeClick(objectiveId, challengeId)}
        >
          Edit ✏️
        </StyleChallengeEditButton>
      </StyledChallengeQuickEditWrapper>
    </StyledChallengeListItem>
  );
}

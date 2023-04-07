import {
  StyledChallengeListItem,
  StyledChallengeDescription,
  StyledChallengeQuickEditWrapper,
  StyledChallengeProgress,
} from "./StyledChallengeList";
import Link from "next/link";

export default function ChallengeListItemComponent({
  challengeNumber,
  challenge,
  onChallengeQuickEditUpdate,
  objectiveId,
  path,
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
        <Link
          href={
            path.includes("archive")
              ? `/objective/${objectiveId}/challenge-detail/${challengeId}/?archive`
              : `/objective/${objectiveId}/challenge-detail/${challengeId}`
          }
        >
          Edit
        </Link>
      </StyledChallengeQuickEditWrapper>
    </StyledChallengeListItem>
  );
}

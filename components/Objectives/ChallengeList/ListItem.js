import {
  StyledChallengeListItem,
  StyledChallengeDescription,
  StyledChallengeQuickEditWrapper,
  StyledChallengeProgress,
  StyledQuickEditButton,
  StyleChallengeEditLink,
} from "./StyledChallengeList";

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
      <StyledChallengeDescription challengeNumber={challengeNumber}>
        {description}
      </StyledChallengeDescription>
      <StyledChallengeQuickEditWrapper>
        <StyledChallengeProgress challengeNumber={challengeNumber}>
          {timesCompleted} / {timesNeeded}
        </StyledChallengeProgress>
        <StyledQuickEditButton
          onClick={() => handleTimesCompletedUpdate("add")}
          disabled={timesCompleted === timesNeeded && true}
        >
          +1
        </StyledQuickEditButton>
        <StyledQuickEditButton
          onClick={() => handleTimesCompletedUpdate("subtract")}
          disabled={timesCompleted < 1 && true}
        >
          -1
        </StyledQuickEditButton>
        <StyleChallengeEditLink
          href={
            path.includes("archive")
              ? `/objective/${objectiveId}/challenge-detail/${challengeId}/?archive`
              : `/objective/${objectiveId}/challenge-detail/${challengeId}`
          }
        >
          Edit ✏️
        </StyleChallengeEditLink>
      </StyledChallengeQuickEditWrapper>
    </StyledChallengeListItem>
  );
}

import StyledChallengeListItemComponent, {
  StyledChallengeList,
  StyledChallengeDescription,
  StyledChallengeProgess,
  StyledChallengeProgessButton,
} from "./StyledChallengeList";

export default function ChallengeList({ objective, onEditChallengeClick }) {
  return (
    <StyledChallengeList>
      {objective.challenges.map((challenge) => (
        <StyledChallengeListItemComponent
          key={challenge.challengeId}
          challengeNumber={objective.challenges.indexOf(challenge)}
        >
          <StyledChallengeDescription>
            {challenge.description}
          </StyledChallengeDescription>
          <StyledChallengeProgess>{`${challenge.timesCompleted} / ${challenge.timesNeeded}`}</StyledChallengeProgess>
          <StyledChallengeProgessButton
            onClick={() =>
              onEditChallengeClick(objective.id, challenge.challengeId)
            }
          >
            ✏️ Edit Challenge
          </StyledChallengeProgessButton>
        </StyledChallengeListItemComponent>
      ))}
    </StyledChallengeList>
  );
}

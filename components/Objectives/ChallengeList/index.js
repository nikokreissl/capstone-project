import StyledChallengeListItemComponent, {
  StyledChallengeList,
  StyledChallengeDescription,
  StyledChallengeProgess,
  StyledChallengeProgessButton,
} from "./StyledChallengeList";

export default function ChallengeList({ objective }) {
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
          <StyledChallengeProgess>{`${challenge.timesNeeded} / ${challenge.timesCompleted}`}</StyledChallengeProgess>
          <StyledChallengeProgessButton>
            ✏️ Edit Challenge
          </StyledChallengeProgessButton>
        </StyledChallengeListItemComponent>
      ))}
    </StyledChallengeList>
  );
}

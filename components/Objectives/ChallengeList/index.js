import StyledChallengeListItemComponent, {
  StyledChallengeList,
  StyledChallengeDescription,
  StyledChallengeProgess,
  StyledChallengeProgessButton,
} from "./StyledChallengeList";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function ChallengeList({ objective, onEditChallengeClick }) {
  return (
    <>
      {objective.challenges.length < 1 ? (
        <EmptyState
          itemName="challenge"
          href={`${objective.id}/add-challenge`}
        />
      ) : (
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
      )}
    </>
  );
}

import StyledChallengeListItemComponent, {
  StyledChallengeList,
} from "./StyledChallengeList";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function ChallengeList({ objective, path }) {
  return (
    <>
      {objective.challenges.length < 1 ? (
        <EmptyState
          itemName="challenge"
          href={`${objective.id}/add-challenge`}
          path={path}
        />
      ) : (
        <StyledChallengeList>
          {objective.challenges.map((challenge) => (
            <StyledChallengeListItemComponent
              key={challenge.challengeId}
              challengeNumber={objective.challenges.indexOf(challenge)}
              challenge={challenge}
              path={path}
            />
          ))}
        </StyledChallengeList>
      )}
    </>
  );
}

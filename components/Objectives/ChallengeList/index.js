import { StyledChallengeList } from "./StyledChallengeList";
import ChallengeListItemComponent from "./ListItem";
import EmptyState from "../../GeneralComponents/Empty-State";

export default function ChallengeList({
  objective,
  path,
  onChallengeQuickEditUpdate,
}) {
  return (
    <>
      {objective.challenges.length < 1 ? (
        <EmptyState itemName="challenge" path={path} />
      ) : (
        <StyledChallengeList>
          {objective.challenges.map((challenge) => (
            <ChallengeListItemComponent
              key={challenge.challengeId}
              challengeNumber={objective.challenges.indexOf(challenge)}
              objectiveId={objective.id}
              challenge={challenge}
              onChallengeQuickEditUpdate={onChallengeQuickEditUpdate}
              path={path}
            />
          ))}
        </StyledChallengeList>
      )}
    </>
  );
}

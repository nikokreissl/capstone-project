import { StyledArticle, StyledDetailsLink } from "./StyledObjectiveCard.js";

export default function ObjectiveCard({ objective, path }) {
  const challengeProgress = objective.challenges.filter(
    (challenge) => challenge.timesNeeded === challenge.timesCompleted
  );

  return (
    <StyledArticle>
      <h3>{objective.name}</h3>
      <p>
        Challenges finished: {challengeProgress.length} /{" "}
        {objective.challenges.length}
      </p>
      <StyledDetailsLink href={`/objective/${objective.id}/?=${path}`}>
        View Details
      </StyledDetailsLink>
    </StyledArticle>
  );
}

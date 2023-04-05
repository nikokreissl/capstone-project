import { StyledArticle } from "./StyledObjectiveCard.js";
import { StyledLinkComponent } from "../../GeneralComponents/Links/index.js";

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
      <StyledLinkComponent
        type="view"
        href={`/objective/${objective.id}/?=${path}`}
      >
        View Details
      </StyledLinkComponent>
    </StyledArticle>
  );
}

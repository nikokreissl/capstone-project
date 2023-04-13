import styled from "styled-components";
import {
  StyledContainer,
  StyledHeadline,
} from "../../GeneralComponents/Cards/index.js";
import { StyledLinkComponent } from "../../GeneralComponents/Links/index.js";
import ProgressBarComponent from "../ProgressBar/index.js";

export default function ObjectiveCard({ objective, path }) {
  const challengeProgress = objective.challenges.filter(
    (challenge) => challenge.timesNeeded === challenge.timesCompleted
  );

  return (
    <StyledContainer>
      <StyledHeadline>{objective.name}</StyledHeadline>
      <StyledObjectiveWrapper>
        <ProgressBarComponent
          challengesNeeded={objective.challenges.length}
          challengesCompleted={challengeProgress.length}
          type="objective"
        />
      </StyledObjectiveWrapper>
      <StyledLinkComponent
        type="view"
        href={`/objective/${objective.id}/?=${path}`}
      >
        View Details
      </StyledLinkComponent>
    </StyledContainer>
  );
}

export const StyledObjectiveWrapper = styled.div`
  margin: 20px 10px;
`;

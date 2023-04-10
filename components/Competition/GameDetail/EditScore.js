import {
  StyledEditScoreContainer,
  StyledEditScoreContainerHeadline,
  StyledEditScoreContainerParagraph,
  StyledEditScoreContainerScore,
  StyledEditScoreUpdateContainer,
  StyledEditScoreUpdateWrapper,
  StyledEditScoreUpdateText,
  StyledEditScoreUpdateButton,
} from "./StyledGameDetail";

export default function EditScoreComponent({
  headline,
  userCount,
  opponentCount,
  onValueUpdate,
  value,
}) {
  return (
    <section>
      <StyledEditScoreContainer>
        <StyledEditScoreContainerHeadline>
          {headline}
        </StyledEditScoreContainerHeadline>
        <StyledEditScoreContainerParagraph>
          Yours{" "}
          <StyledEditScoreContainerScore>
            {userCount}
          </StyledEditScoreContainerScore>{" "}
          :{" "}
          <StyledEditScoreContainerScore>
            {opponentCount}
          </StyledEditScoreContainerScore>{" "}
          Opponent
        </StyledEditScoreContainerParagraph>
      </StyledEditScoreContainer>
      <StyledEditScoreUpdateContainer>
        <StyledEditScoreUpdateWrapper>
          <StyledEditScoreUpdateText>Your {headline}</StyledEditScoreUpdateText>
          <StyledEditScoreUpdateButton
            onClick={() => onValueUpdate("user", "increment", value)}
          >
            +{value}
          </StyledEditScoreUpdateButton>
          <StyledEditScoreUpdateButton
            onClick={() => onValueUpdate("user", "decrement", value)}
            disabled={
              (userCount < 1 && value === 1) || userCount === 0 ? true : false
            }
          >
            -{value}
          </StyledEditScoreUpdateButton>
        </StyledEditScoreUpdateWrapper>
        <StyledEditScoreUpdateWrapper>
          <StyledEditScoreUpdateText>
            Opponent {headline}
          </StyledEditScoreUpdateText>
          <StyledEditScoreUpdateButton
            onClick={() => onValueUpdate("opponent", "increment", value)}
          >
            +{value}
          </StyledEditScoreUpdateButton>
          <StyledEditScoreUpdateButton
            onClick={() => onValueUpdate("opponent", "decrement", value)}
            disabled={
              (opponentCount < 1 && value === 1) || opponentCount === 0
                ? true
                : false
            }
          >
            -{value}
          </StyledEditScoreUpdateButton>
        </StyledEditScoreUpdateWrapper>
      </StyledEditScoreUpdateContainer>
    </section>
  );
}

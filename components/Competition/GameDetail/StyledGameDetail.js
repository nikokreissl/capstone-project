import styled from "styled-components";

export const StyledDetailContainer = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function EditScoreComponent({
  headline,
  userCount,
  opponentCount,
  onValueUpdate,
  value,
}) {
  return (
    <>
      <StyledEditScoreContainer>
        <h3>{headline}</h3>
        <p>
          Yours {userCount} : {opponentCount} Opponent
        </p>
      </StyledEditScoreContainer>
      <StyledEditScoreUpdateContainer>
        <StyledEditScoreUpdateWrapper>
          <StyledEditScoreUpdateText>
            Update your {headline}
          </StyledEditScoreUpdateText>
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
            Update opponent {headline}
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
    </>
  );
}

const StyledEditScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledEditScoreUpdateContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledEditScoreUpdateWrapper = styled.div`
  width: 35vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
`;

const StyledEditScoreUpdateText = styled.p`
  grid-column: 1 / -1;
`;

const StyledEditScoreUpdateButton = styled.button`
  width: 80%;
  padding: 10px;
`;
// Challenge

export const StyledTimesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

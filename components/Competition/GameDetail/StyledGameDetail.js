import styled from "styled-components";
import { StyledButton } from "../../GeneralComponents/Buttons/StyledButton";

export const StyledDetailContainer = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function EditScoreComponent() {
  return (
    <StyledEditScoreContainer>
      <h3>Score</h3>
      <p>Yours 0 : 0 Opponent</p>
      <StyledEditScoreUpdateContainer />
      <StyledEditScoreUpdateComponent updateScoreText="Update your score" />
    </StyledEditScoreContainer>
  );
}

const StyledEditScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function StyledEditScoreUpdateComponent({ updateScoreText }) {
  return (
    <EditScoreComponent>
      <StyledEditScoreUpdateText>{updateScoreText}</StyledEditScoreUpdateText>
    </EditScoreComponent>
  );
}

const StyledEditScoreUpdateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StyledEditScoreUpdateText = styled.p``;

// Challenge

export const StyledTimesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

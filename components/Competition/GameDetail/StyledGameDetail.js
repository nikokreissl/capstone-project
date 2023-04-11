import styled from "styled-components";

export const StyledEditScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledEditScoreContainerHeadline = styled.h3`
  align-self: flex-start;
  padding: 10px;
  background-color: var(--medium);
  width: 100%;
`;

export const StyledEditScoreContainerParagraph = styled.p`
  margin: 10px;
`;

export const StyledEditScoreContainerScore = styled.span`
  color: var(--orange);
  font-weight: bold;
  font-size: 1.3rem;
`;

export const StyledEditScoreUpdateContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const StyledEditScoreUpdateWrapper = styled.div`
  width: 35vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
`;

export const StyledEditScoreUpdateText = styled.p`
  grid-column: 1 / -1;
  font-size: 0.7rem;
`;

export const StyledEditScoreUpdateButton = styled.button`
  width: 35px;
  height: 35px;
  background-color: var(--madium-dark);
  border-radius: 5px;
  color: var(--orange);
  border: 1px solid var(--light-gray);
  &:disabled {
    background-color: gray;
    color: var(--light-gray);
  }
`;

export const StyledUpdateXgoalsValueWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

import styled from "styled-components";

export const StyledEditChallengeForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledTimesWrapper = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: 55% repeat(3, 15%);
  justify-items: center;
  align-items: center;
`;

export const StyledTextarea = styled.textarea`
  background-color: var(--medium-dark);
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  color: var(--light);
  padding: 10px;
  &:focus-visible {
    outline: none;
    border: 1px solid var(--orange);
  }
`;

export const StyledTimesParagraph = styled.p`
  justify-self: flex-start;
`;

export const SyledTimesNumber = styled.p`
  color: var(--orange);
  font-style: bold;
  font-size: 1.2rem;
`;

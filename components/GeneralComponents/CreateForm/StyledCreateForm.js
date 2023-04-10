import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 2.5vw;
  padding: 20px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
`;

export const StyledFormLabel = styled.label`
  color: var(--light-gray);
`;

export const StyledInputField = styled.input`
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

export const StyledRangeField = styled.input`
  width: 30%;
`;

export const StyledFormLabelInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

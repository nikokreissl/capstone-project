import styled from "styled-components";
import { StyledButton } from "../Buttons/StyledButton";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
  margin: 25px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const StyledFormLabel = styled.label``;

export const StyledFormInput = styled.input``;

export const StyledFormButton = styled(StyledButton)`
  margin-top: 10px;
  width: 50%;
  align-self: center;
`;

export const StyledFormLabelInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

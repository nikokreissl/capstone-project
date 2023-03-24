import styled from "styled-components";
import { StyledButton } from "../Buttons/StyledButton";

export const StyledCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
  margin: 25px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const StyledCreateFormLabel = styled.label``;

export const StyledCreateFormInput = styled.input``;

export const StyledCreateFormButton = styled(StyledButton)`
  margin-top: 10px;
  width: 50%;
  align-self: center;
`;

export const StyledCreateFormLabelInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

import styled from "styled-components";
import { StyledButton } from "../../GeneralComponents/Buttons/StyledButton";

export const StyledCompetitionForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
  margin: 25px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const StyledCompetitionFormLabel = styled.label``;

export const StyledCompetitionFormInput = styled.input``;

export const StyledCompetitionFormButton = styled(StyledButton)`
  margin-top: 10px;
  width: 50%;
  align-self: center;
`;

export const StyledCompetitionFormLabelInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

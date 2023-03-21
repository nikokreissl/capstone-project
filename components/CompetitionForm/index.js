import styled from "styled-components";

export default function StyledCompetitionFormComponent({ children }) {
  return <StyledCompetitionForm>{children}</StyledCompetitionForm>;
}

const StyledCompetitionForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
`;

export const StyledCompetitionFormLabel = styled.label``;

export const StyledCompetitionFormInput = styled.input``;

export const StyledCompetitionFormButton = styled.button``;

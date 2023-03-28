import styled from "styled-components";
import { StyledButton } from "../../GeneralComponents/Buttons/StyledButton";

export const StyledDetailContainer = styled.section`
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledGameForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledNumberInput = styled.input`
  width: 50px;
  margin: 5px;
`;

export const StyledGameButton = styled(StyledButton)`
  align-self: center;
`;

import styled from "styled-components";
import { StyledButton } from "../../GeneralComponents/Buttons/StyledButton";

export const StyledCompetitionDetailsContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 70vw;
`;

export const StyledCompetitionDetailButton = styled(StyledButton)`
  width: 50%;
  align-self: center;
`;

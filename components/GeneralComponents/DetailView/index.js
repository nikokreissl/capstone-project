import styled from "styled-components";
import { StyledButton } from "../Buttons/StyledButton";

export const StyledDetailsContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 70vw;
`;

export const StyledDetailButton = styled(StyledButton)`
  width: 50%;
  align-self: center;
`;

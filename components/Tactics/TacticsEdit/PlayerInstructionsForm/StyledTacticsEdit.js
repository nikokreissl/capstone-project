import styled from "styled-components";
import { StyledHeadline } from "../../../GeneralComponents/Cards";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledSubmitButton = styled.button`
  position: sticky;
  bottom: 50px;
`;

export const StyledH3 = styled(StyledHeadline)`
  width: 100%;
  padding: 10px;
  position: sticky;
  top: 0;
`;

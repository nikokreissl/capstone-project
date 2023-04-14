import styled from "styled-components";
import { StyledLinkComponent } from "../Links";

export function PageHeadlineComponent({ children }) {
  return (
    <div>
      <StyledHeadline>{children}</StyledHeadline>
      <hr />
    </div>
  );
}

export const StyledHeadline = styled.h2`
  padding: 10px;
  margin-top: 10px;
`;

export const StyledPageDescription = styled.p`
  font-style: italic;
  padding: 10px;
  font-size: 0.9rem;
`;

export function PageHeadlineComponentWithCreate({ href, children }) {
  return (
    <div>
      <StyledHeadlineContainer>
        <StyledHeadlineWithCreate>{children}</StyledHeadlineWithCreate>
        <StyledLinkComponent href={href} type="add">
          Create
        </StyledLinkComponent>
      </StyledHeadlineContainer>
      <hr />
    </div>
  );
}

export const StyledHeadlineWithCreate = styled.h2`
  padding: 7px;
  width: 55%;
`;

const StyledHeadlineContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const StyledSpacer = styled.div`
  height: 30px;
`;

import styled from "styled-components";

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
  font-size: 0.8rem;
`;

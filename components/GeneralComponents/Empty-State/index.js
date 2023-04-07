import React from "react";
import styled from "styled-components";
import { StyledLinkComponent } from "../Links";

export default function EmptyState({ itemName, path }) {
  return (
    <StyledEmptyStateText>
      {path.includes("archive")
        ? `No ${itemName} is archived at the moment. `
        : `No ${itemName} given yet. You can create a new one by clicking the button
below.`}
    </StyledEmptyStateText>
  );
}

const StyledEmptyStateText = styled.p`
  font-size: 1.4rem;
  margin: 3rem;
  text-align: center;
`;

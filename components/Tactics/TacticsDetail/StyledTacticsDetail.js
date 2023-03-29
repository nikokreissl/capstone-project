import styled from "styled-components";
import { useState } from "react";

export const StyledTabsContainer = styled.div`
  display: flex;
`;

export function StyledTab({ children, shown, handleTabClick }) {
  return (
    <StyledTabs>
      <StyledTabButton onClick={handleTabClick} shown={shown}>
        {children}
      </StyledTabButton>
    </StyledTabs>
  );
}

const StyledTabs = styled.div`
  width: 50vw;
  height: 50px;
`;

const StyledTabButton = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ shown }) => (shown === true ? "orange" : "")};
`;

export function StyledInstruction({ instructionHeadline, children }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <StyledInstructionHeaderContainer>
        <StyledInstructionWrapper>
          <h4>{instructionHeadline}</h4>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show more"}
          </button>
        </StyledInstructionWrapper>
        <StyledInstructionHeaderDivider />
      </StyledInstructionHeaderContainer>
      {showMore === true && (
        <StyledInstructionDetails>{children}</StyledInstructionDetails>
      )}
    </>
  );
}

const StyledInstructionHeaderContainer = styled.div`
  width: 100%;
  background-color: lightgray;
`;

const StyledInstructionWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const StyledInstructionHeaderDivider = styled.hr`
  border: 1px solid gray;
  margin: 5px 20px;
`;

const StyledInstructionDetails = styled.div`
  padding: 10px;
`;

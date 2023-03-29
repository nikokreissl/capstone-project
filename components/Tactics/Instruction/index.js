import styled from "styled-components";

import { useState } from "react";

export default function InstructionDetail({ instruction }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <StyledInstructionHeaderContainer>
        <StyledInstructionWrapper>
          <h4>{instruction.instructionFor}</h4>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show more"}
          </button>
        </StyledInstructionWrapper>
        <StyledInstructionHeaderDivider />
      </StyledInstructionHeaderContainer>
      {showMore && (
        <StyledInstructionDetailsContainer>
          {instruction.detailedInstructions.map((detailedInstruction) => (
            <StyledInstructionDetails key={detailedInstruction.instructionName}>
              <h5>{detailedInstruction.instructionName}</h5>
              <p>{detailedInstruction.value}</p>
            </StyledInstructionDetails>
          ))}
        </StyledInstructionDetailsContainer>
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

const StyledInstructionDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const StyledInstructionDetails = styled.div`
  width: 32vw;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  margin: 1px;
`;

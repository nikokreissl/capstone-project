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
              <StyledInstructionDetailsTitle>
                {detailedInstruction.instructionName}
              </StyledInstructionDetailsTitle>
              <StyledInstructionsDetailsParagraph>
                {detailedInstruction.value}
              </StyledInstructionsDetailsParagraph>
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
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledInstructionDetails = styled.div`
  width: 40vw;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
`;

const StyledInstructionDetailsTitle = styled.h5`
  heigth: 25px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const StyledInstructionsDetailsParagraph = styled.p`
  text-align: center;
  font-size: 0.9rem;
`;

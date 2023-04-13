import styled from "styled-components";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "../../../public/icons/icons";

export default function InstructionDetail({ instruction }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <StyledInstructionContainer>
      <StyledInstructionHeaderContainer>
        <StyledInstructionWrapper>
          <h4>{instruction.instructionFor}</h4>
          <StyledShowMoreLessButton onClick={() => setShowMore(!showMore)}>
            {showMore ? ArrowUp() : ArrowDown()}
          </StyledShowMoreLessButton>
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
    </StyledInstructionContainer>
  );
}

const StyledInstructionContainer = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledInstructionHeaderContainer = styled.article`
  background-color: var(--medium-dark);
  padding-bottom: 5px;
`;

const StyledInstructionWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledShowMoreLessButton = styled.button`
  background-color: transparent;
  border: none;
`;

const StyledInstructionHeaderDivider = styled.hr`
  border: 1px solid var(--light-gray);
  margin: 5px 20px;
`;

const StyledInstructionDetailsContainer = styled.div`
  width: 100%;
  padding: 10px 10px 0 10px;
`;

const StyledInstructionDetails = styled.div`
  padding: 8px;
  border: 1px solid var(--light);
  border-radius: 3px;
  margin-bottom: 10px;
`;

import styled from "styled-components";
import { useState } from "react";

export default function InputRangeComponent({
  instructionFor,
  detailedInstruction,
  defaultValue,
}) {
  const [value, setValue] = useState(defaultValue);
  const { instructionName, minValue, maxValue } = detailedInstruction;

  return (
    <StyledTacticRangeInputWrapper>
      <StyledRangeOutput>
        <strong>{value}</strong>
      </StyledRangeOutput>
      <StyledTacticRangeInput
        onChange={(event) => setValue(event.target.value)}
        name={`${instructionFor} ${instructionName}`}
        id={`${instructionFor}-${instructionName}`}
        type="range"
        min={`${minValue}`}
        max={`${maxValue}`}
        value={value}
      />
    </StyledTacticRangeInputWrapper>
  );
}

const StyledTacticRangeInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledRangeOutput = styled.p`
  color: var(--orange);
  width: 20px;
`;

const StyledTacticRangeInput = styled.input`
  width: 70%;
`;

import styled from "styled-components";
import Spinner from "../../GeneralComponents/CircleAnimation";
import { StyledButton } from "../../GeneralComponents/Buttons";
import { SubmitIcon } from "../../../public/icons/icons";
import { useState } from "react";

export const StyledDetailedInstructionEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  gap: 5px;
`;

export const StyledTacticFieldset = styled.fieldset`
  border: 1px solid var(--light-gray);
  color: var(--orange);
`;

export const StyledTacticLegend = styled.legend`
  font-size: 1.2rem;
  font-style: bold;
`;

export const StyledTacticSelect = styled.select`
  padding: 5px;
  border-radius: 5px;
  background-color: var(--medium-dark);
  color: var(--light);
  &:focus-visible {
    outline: none;
  }
`;

export function TacticsSubmitButton({ children }) {
  const [waiting, setWaiting] = useState(false);

  function handleClick() {
    setWaiting(true);
    setTimeout(() => {
      setWaiting(false);
    }, 1000);
  }

  return (
    <StyledSubmitButton onClick={handleClick}>
      {waiting ? (
        <Spinner />
      ) : (
        <>
          <SubmitIcon disabled="false" /> {children}
        </>
      )}
    </StyledSubmitButton>
  );
}

const StyledSubmitButton = styled(StyledButton)`
  position: sticky;
  bottom: 90px;
  height 30px;
`;

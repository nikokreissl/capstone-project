import styled from "styled-components";

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

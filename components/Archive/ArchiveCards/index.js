import styled from "styled-components";
import { StyledLinkComponent } from "../../GeneralComponents/Links";
import { StyledContainer, StyledHeadline } from "../../GeneralComponents/Cards";

export default function ArchiveCard({ itemName, object, href }) {
  const archivedItems = object.filter((item) => item.isArchived === true);

  return (
    <StyledContainer>
      <StyledHeadline>{itemName}</StyledHeadline>
      <StyledArchiveCardContainer>
        <h4>Total number of {itemName}</h4>
        <StyledArchiveCardText>{archivedItems.length}</StyledArchiveCardText>
      </StyledArchiveCardContainer>
      <StyledLinkComponent type="view" href={href}>
        View Details
      </StyledLinkComponent>
    </StyledContainer>
  );
}

const StyledArchiveCardContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledArchiveCardText = styled.p`
  font-weight: bold;
  color: var(--orange);
  font-size: 1.2rem;
`;

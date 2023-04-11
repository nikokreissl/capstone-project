import { StyledLinkComponent } from "../../GeneralComponents/Links";
import {
  StyledContainer,
  StyledHeadline,
  StyledParagraph,
} from "../../GeneralComponents/Cards";

export default function ArchiveCard({ itemName, object, href }) {
  const archivedItems = object.filter((item) => item.isArchived === true);

  return (
    <StyledContainer>
      <StyledHeadline>All {itemName}</StyledHeadline>
      <StyledParagraph>Total: {archivedItems.length}</StyledParagraph>
      <StyledLinkComponent type="view" href={href}>
        View Details
      </StyledLinkComponent>
    </StyledContainer>
  );
}

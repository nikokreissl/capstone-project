import { StyledDetailsLink } from "../../Competition/CompetitionCard/StyledCompetitionCard";
import styled from "styled-components";

export default function ArchiveCard({ itemName, object, href }) {
  const archivedItems = object.filter((item) => item.isArchived === true);

  return (
    <StyledArchiveCard>
      <h3>All {itemName}</h3>
      <p>Total: {archivedItems.length}</p>
      <StyledDetailsLink href={href}>View Details</StyledDetailsLink>
    </StyledArchiveCard>
  );
}

const StyledArchiveCard = styled.article`
  width: 80vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 25px;
  margin: 25px;
`;

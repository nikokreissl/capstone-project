import styled from "styled-components";
import Link from "next/link";
import { ViewMoreIcon, BackIcon, AddIcon } from "../../../public/icons";

export function StyledLinkComponent({ href, type, children, disabledlink }) {
  const linkIcons = {
    view: ViewMoreIcon(disabledlink),
    back: BackIcon(disabledlink),
    add: AddIcon(disabledlink),
  };

  return (
    <StyledLink href={href} disabledlink={disabledlink}>
      {linkIcons[type]}
      {children}
    </StyledLink>
  );
}
const StyledLink = styled(Link)`
  color: ${({ disabledlink }) =>
    disabledlink ? "var(--light)" : "var(--orange)"};
  background-color: ${({ disabledlink }) =>
    disabledlink ? "gray" : "var(--medium-dark)"};
  pointer-events: ${({ disabledlink }) => (disabledlink ? "none" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  gap: 10px;
  padding: 5px;
  margin: 5px auto;
  border: 1px solid var(--light);
  border-radius: 20px;
  text-decoration: none;
  &:visited {
    color: ${({ disabledlink }) =>
      disabledlink ? "var(--light)" : "var(--orange)"};
  }
`;

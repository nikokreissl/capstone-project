import styled from "styled-components";
import Link from "next/link";
import { ViewMoreIcon, BackIcon, AddIcon } from "../../../public/icons";

export function StyledLinkComponent({ href, type, children, disabledLink }) {
  const linkIcons = {
    view: ViewMoreIcon(disabledLink),
    back: BackIcon(disabledLink),
    add: AddIcon(disabledLink),
  };

  return (
    <StyledLink href={href} disabledLink={disabledLink}>
      {linkIcons[type]}
      {children}
    </StyledLink>
  );
}
const StyledLink = styled(Link)`
  color: ${({ disabledLink }) =>
    disabledLink ? "var(--light)" : "var(--orange)"};
  background-color: ${({ disabledLink }) =>
    disabledLink ? "gray" : "var(--medium-dark)"};
  pointer-events: ${({ disabledLink }) => (disabledLink ? "none" : "auto")};
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
    color: ${({ disabledLink }) =>
      disabledLink ? "var(--light)" : "var(--orange)"};
  }
`;

import styled from "styled-components";
import Link from "next/link";
import { ViewMoreIcon, BackIcon, AddIcon } from "../../../public/icons";

export function StyledLinkComponent({ href, type, children, disabled }) {
  const linkIcons = {
    view: ViewMoreIcon(disabled),
    back: BackIcon(disabled),
    add: AddIcon(disabled),
  };

  return (
    <StyledLink href={href} disabled={disabled}>
      {linkIcons[type]}
      {children}
    </StyledLink>
  );
}
const StyledLink = styled(Link)`
  color: ${({ disabled }) => (disabled ? "var(--light)" : "var(--orange)")};
  background-color: ${({ disabled }) =>
    disabled ? "gray" : "var(--medium-dark)"};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  gap: 10px;
  padding: 5px;
  margin: 5px auto;
  border: 1px solid var(--light);
  border-radius: 20px;
  text-decoration: none;
  &:visited {
    color: ${({ disabled }) => (disabled ? "var(--light)" : "var(--orange)")};
  }
`;

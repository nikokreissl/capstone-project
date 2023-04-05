import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ViewMoreIcon from "../../../public/view-more.svg";
import BackIcon from "../../../public/back-icon.svg";
import AddIcon from "../../../public/add-item.svg";

export function StyledLinkComponent({ href, type, children }) {
  function getIcon(type) {
    if (type === "view") {
      return ViewMoreIcon;
    } else if (type === "back") {
      return BackIcon;
    } else if (type === "add") {
      return AddIcon;
    }
  }

  return (
    <StyledLink href={href}>
      <Image src={getIcon(type)} alt={type} width={20} height={20} />
      {children}
    </StyledLink>
  );
}
const StyledLink = styled(Link)`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  gap: 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.2s;
  &:visited {
    color: black;
  }
  &:hover {
    text-decoration: underline;
    border-color: orange;
    color: orange;
    cursor: pointer;
  }
`;

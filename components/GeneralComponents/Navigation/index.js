import styled from "styled-components";
import Link from "next/link";

const navigationLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Tactics",
    href: "/tactics",
  },
  {
    name: "Home",
    href: "/archive",
  },
];

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledNavigationList>
        {navigationLinks.map((navigationLink) => {
          <StyledNavigationListItem>
            <StyledNavigationLink href={navigationLink.href}>
              {navigationLink.name}
            </StyledNavigationLink>
          </StyledNavigationListItem>;
        })}
      </StyledNavigationList>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  background-color: lightgray;
  width: 100%;
`;

const StyledNavigationList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  font-size: 1.6rem;
`;

const StyledNavigationListItem = styled.li`
  padding: 0;
  flex: 1;
  text-align: center;
`;

const StyledNavigationLink = styled(Link)`
  height: 50px;
  display: block;
`;

import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

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
    name: "Archive",
    href: "/archive",
  },
];

const navigationIcons = {
  Home: HomeIcon,
  Tactics: TacticIon,
  Archive: ArchiveIcon,
};

export default function Navigation() {
  const router = useRouter();
  const path = router.asPath;

  function getActiveItem() {
    if (path.startsWith("/tactics")) {
      return "Tactics";
    } else if (path.startsWith("/archive")) {
      return "Archive";
    } else {
      return "Home";
    }
  }

  return (
    <StyledNavigation>
      <StyledNavigationList>
        {navigationLinks.map((navigationLink) => (
          <li key={navigationLink.href}>
            <StyledNavigationLink
              link={navigationLink}
              active={getActiveItem()}
            >
              {navigationLink.icon}
              {navigationLink.name}
            </StyledNavigationLink>
          </li>
        ))}
      </StyledNavigationList>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: -1px;
  background-color: var(--medium-dark);
  width: 100%;
`;

const StyledNavigationList = styled.ul`
  height: 80px;
  border-top: 1px solid var(--light);
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
`;

function StyledNavigationLink({ link, active }) {
  return (
    <StyledLink href={link.href} linkName={link.name} active={active}>
      {navigationIcons[link.name](link.name, active)}
      {link.name}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
  text-decoration: none;
  color: ${({ linkName, active }) =>
    linkName === active ? "var(--orange)" : "var(--light)"};
  padding: 10px;
  border: ${({ linkName, active }) =>
    linkName === active ? "1px solid var(--orange)" : "1px solid transparent"};
  border-radius: 25px;
`;

function TacticIon(linkName, active) {
  return (
    <svg
      fill={linkName === active ? "var(--orange)" : "var(--light"}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
    </svg>
  );
}

function HomeIcon(linkName, active) {
  return (
    <svg
      fill={linkName === active ? "var(--orange)" : "var(--light"}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
    </svg>
  );
}

function ArchiveIcon(linkName, active) {
  return (
    <svg
      fill={linkName === active ? "var(--orange)" : "var(--light"}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path d="M45.9 42.1c3-6.1 9.6-9.6 16.3-8.7L307 64 551.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L426.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L307 64 223.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L24.1 170.6C4.8 165.1-4.7 143.4 4.2 125.5L45.9 42.1zM308.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L563 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C66 419.7 51 400.5 51 378.5v-167L178.6 248c27.8 8 57.6-3.8 72.5-28.6L305.9 128h2.2z" />
    </svg>
  );
}

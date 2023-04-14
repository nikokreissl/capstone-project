import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const navigationLinks = [
  {
    name: "Competitions",
    href: "/",
  },
  {
    name: "Objectives",
    href: "/objectives",
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
  Competitions: CompetitionIcon,
  Objectives: ObjectiveIcon,
  Tactics: TacticIcon,
  Archive: ArchiveIcon,
};

export default function Navigation() {
  const router = useRouter();
  const path = router.asPath;

  function getActiveItem() {
    if (path.includes("objectives")) {
      if (path.includes("archive")) {
        return "Archive";
      } else {
        return "Objectives";
      }
    } else if (path.includes("tactics")) {
      if (path.includes("archive")) {
        return "Archive";
      } else {
        return "Tactics";
      }
    } else if (path.startsWith("/archive")) {
      return "Archive";
    } else {
      return "Competitions";
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
  padding: 5px;
  padding-bottom: 30px;
  height: 80px;
  border-top: 1px solid var(--light);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
`;

function StyledNavigationLink({ link, active }) {
  return (
    <StyledLink href={link.href} linkname={link.name} active={active}>
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
  color: ${({ linkname, active }) =>
    linkname === active ? "var(--orange)" : "var(--light)"};
  padding: 5px;
  border: ${({ linkname, active }) =>
    linkname === active ? "1px solid var(--orange)" : "1px solid transparent"};
  border-radius: 25px;
`;

function CompetitionIcon(linkname, active) {
  return (
    <svg
      fill={linkname === active ? "var(--orange)" : "var(--light"}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z" />
    </svg>
  );
}

function ObjectiveIcon(linkname, active) {
  return (
    <svg
      fill={linkname === active ? "var(--orange)" : "var(--light"}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </svg>
  );
}

function TacticIcon(linkname, active) {
  return (
    <svg
      fill={linkname === active ? "var(--orange)" : "var(--light"}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
    </svg>
  );
}

function ArchiveIcon(linkname, active) {
  return (
    <svg
      fill={linkname === active ? "var(--orange)" : "var(--light"}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path d="M45.9 42.1c3-6.1 9.6-9.6 16.3-8.7L307 64 551.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L426.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L307 64 223.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L24.1 170.6C4.8 165.1-4.7 143.4 4.2 125.5L45.9 42.1zM308.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L563 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C66 419.7 51 400.5 51 378.5v-167L178.6 248c27.8 8 57.6-3.8 72.5-28.6L305.9 128h2.2z" />
    </svg>
  );
}

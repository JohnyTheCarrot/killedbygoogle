import styled from "styled-components";
import logo from "../assets/logo.svg";
import Button from "./Button";
import HeaderLink from "./HeaderLink";

const HeaderDesktopBase = styled.header`
  background-color: var(--header);
  display: flex;
  align-items: stretch;
  box-shadow: var(--header-shadow);
  user-select: none;
  position: sticky;
  top: 0;

  @media (max-width: 47.5rem) {
    display: none;
  }

  .logo,
  .links,
  .buttons {
    display: flex;
  }

  .logo {
    align-items: center;
    padding: var(--header-padding-vertical) 0 var(--header-padding-vertical)
      var(--header-padding-horizontal);
  }

  .logo__image {
    height: 1.6rem;
  }

  .logo__title {
    font-size: 1.4rem;
    margin-left: 1rem;
    color: var(--header-logo-text);
  }

  @media (min-width: 50rem) {
    .links {
      margin-left: 3.25rem;
    }
  }

  .buttons {
    padding: var(--header-padding-vertical) var(--header-padding-horizontal)
      var(--header-padding-vertical) 0;
    margin-left: auto;

    > :not(:first-child) {
      margin-left: 2rem;
    }
  }
`;

function HeaderDesktop() {
  return (
    <HeaderDesktopBase>
      <div className="logo">
        <img draggable={false} src={logo} alt="logo" className="logo__image" />
        <span className="logo__title">
          Killed By <strong>Google</strong>
        </span>
      </div>
      <div className="links">
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </div>
      <div className="buttons">
        <a
          href="https://github.com/codyogden/killedbygoogle/issues"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="ghost">Submit an Issue</Button>
        </a>
        <a
          href="https://twitter.com/killedbygoogle"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="primary">Follow Us</Button>
        </a>
      </div>
    </HeaderDesktopBase>
  );
}

export default HeaderDesktop;

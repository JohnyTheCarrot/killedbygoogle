import styled, { keyframes } from "styled-components";
import { Dispatch, SetStateAction } from "react";
import logo from "../assets/logo.svg";
import HamburgerLink from "./HamburgerLink";

const AnimHamburgerClose = keyframes`
  from {
    left: 0;
  }
  
  to {
    left: -100%;
  }
`;

const AnimHamburgerOpen = keyframes`
  from {
    left: -100%;
  }
  
  to {
    left: 0;
  }
`;

const HamburgerBase = styled.nav`
  .backdrop {
    z-index: 5000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    transition: background-color 400ms;
  }

  &:not([data-open]) {
    .backdrop,
    .hamburger-menu {
      display: none;
    }
  }

  &[data-open="true"] {
    .backdrop {
      background-color: rgba(0, 0, 0, 0.2);
    }

    .hamburger-menu {
      left: 0;
      animation: ${AnimHamburgerOpen} 400ms ease-out none;
    }
  }

  &[data-open="false"] {
    .backdrop {
      background-color: rgba(0, 0, 0, 0);
      pointer-events: none;
    }

    .hamburger-menu {
      left: -100%;
      animation: ${AnimHamburgerClose} 400ms ease-in none;
    }
  }

  .hamburger-menu {
    position: fixed;
    top: 0;
    height: 100%;
    z-index: 6000;
    background-color: var(--hamburger-menu);
    box-sizing: border-box;
    width: 18rem;
    max-width: 80vw;

    .hamburger__content {
      padding: 1rem 1rem 1rem 0;

      & > * {
        margin-bottom: 0.5rem;
      }
    }

    .hamburger__logo {
      display: flex;
      align-items: center;
      padding: 1rem;
      box-shadow: var(--header-shadow);
    }

    .hamburger__logo__image {
      height: 1.5rem;
    }

    .hamburger__logo__title {
      font-size: 1rem;
      margin-left: 0.6rem;
      color: var(--header-logo-text);
    }
  }
`;

interface Props {
  open: boolean | undefined;
  setOpen: Dispatch<SetStateAction<boolean | undefined>>;
}

function Hamburger(props: Props) {
  function onClick() {
    props.setOpen(false);
  }

  return (
    <HamburgerBase data-open={props.open}>
      <div className="backdrop" onClick={onClick} />
      <div className="hamburger-menu">
        <div className="hamburger__logo">
          <img
            draggable={false}
            src={logo}
            alt="logo"
            className="hamburger__logo__image"
          />
          <span className="hamburger__logo__title">
            Killed By <strong>Google</strong>
          </span>
        </div>
        <div className="hamburger__content">
          <HamburgerLink to="/" onClick={onClick}>
            Home
          </HamburgerLink>
          <HamburgerLink to="/about" onClick={onClick}>
            About
          </HamburgerLink>
        </div>
      </div>
    </HamburgerBase>
  );
}

export default Hamburger;

import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useState } from "react";
import Hamburger from "./Hamburger";

const HeaderMobileBase = styled.header`
  display: flex;
  align-items: center;
  padding: var(--header-padding-vertical);
  box-shadow: var(--header-shadow);

  @media (min-width: 47.5rem) {
    display: none;
  }

  .hamburger {
    border: none;
    background: none;
    padding: 0.25rem;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 3.3px;
    margin-right: 0.75rem;
  }

  .hamburger > img {
    height: 1.6rem;
  }

  .hamburger:active {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo__image {
    height: 1.6rem;
  }

  .logo__title {
    font-size: 1.4rem;
    color: var(--header-logo-text);
  }
`;

function HeaderMobile() {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean | undefined>();

  return (
    <HeaderMobileBase>
      <Hamburger open={hamburgerOpen} setOpen={setHamburgerOpen} />
      <button className="hamburger" onClick={() => setHamburgerOpen(true)}>
        <img
          draggable={false}
          src={logo}
          alt="hamburger"
          className="hamburger__image"
        />
      </button>
      <div className="logo">
        <span className="logo__title">
          Killed By <strong>Google</strong>
        </span>
      </div>
    </HeaderMobileBase>
  );
}

export default HeaderMobile;

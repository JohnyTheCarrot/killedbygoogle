import styled from "styled-components";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import logo from "../assets/logo.svg";
import HamburgerLink from "./HamburgerLink";
import Button from "./Button";
import { animated, config, useSpring } from "react-spring";
import { useDrag } from "@use-gesture/react";

const HamburgerBase = styled(animated.div)`
  .backdrop {
    z-index: 5000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
  }

  .hamburger-menu {
    touch-action: none;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 6000;
    background-color: var(--hamburger-menu);
    box-sizing: border-box;
    width: 18rem;
    display: flex;
    flex-direction: column;
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

    .hamburger__footer {
      padding: 0 1rem 1rem;
      margin-top: auto;

      & > * {
        display: block;
        width: 100%;
        margin-top: 0.5rem;

        > button {
          width: 100%;
        }
      }
    }
  }
`;

interface Props {
  open: boolean | undefined;
  setOpen: Dispatch<SetStateAction<boolean | undefined>>;
}

function Hamburger(props: Props) {
  const hamburgerRest = -300;
  const [{ hamburgerX }, api] = useSpring(() => ({
    hamburgerX: hamburgerRest,
    config: { clamp: true },
    onRest: ({ value: { hamburgerX } }) => {
      if (hamburgerX === hamburgerRest) props.setOpen(false);
    },
  }));

  const open = useCallback(
    ({ cancelled }: { cancelled: boolean }) => {
      api.start({
        hamburgerX: 0,
        immediate: false,
        config: cancelled ? config.wobbly : config.stiff,
      });
    },
    [api]
  );

  useEffect(() => {
    if (props.open) open({ cancelled: false });
  }, [props.open, open]);

  function close() {
    api.start({
      hamburgerX: hamburgerRest,
      immediate: false,
      config: config.stiff,
    });
  }

  const bind = useDrag(
    ({ last, direction: [dx], velocity: [vx], movement: [mx] }) => {
      if (last) {
        if (mx < hamburgerRest / 2 || (vx > 0.5 && dx < 0)) {
          close();
        } else {
          open({ cancelled: true });
        }

        return;
      }

      if (dx > 0) return;

      api.start({ hamburgerX: mx, immediate: true });
    },
    {
      from: () => [hamburgerX.get(), 0],
      filterTaps: true,
      bounds: { right: 0 },
    }
  );

  function onClick() {
    close();
  }

  const display = hamburgerX.to((py) => (py > hamburgerRest ? "flex" : "none"));
  return (
    <HamburgerBase>
      <animated.div
        className="backdrop"
        onClick={onClick}
        style={{
          opacity: hamburgerX.to([0, hamburgerRest], [0.5, 0.0]),
          display,
        }}
      />
      <animated.div
        className="hamburger-menu"
        {...bind()}
        style={{
          transform: hamburgerX.to((v) => `translateX(${v}px)`),
          display,
        }}
      >
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
        <div className="hamburger__footer">
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
      </animated.div>
    </HamburgerBase>
  );
}

export default Hamburger;

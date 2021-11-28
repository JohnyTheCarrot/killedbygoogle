import styled from "styled-components";
import LogoTwitter from "../assets/logo-twitter.svg";
import LogoGithub from "../assets/logo-github.svg";
import { Link } from "react-router-dom";
import { HTMLAttributes } from "react";

const FooterBase = styled.footer`
  padding: 2rem;

  @media (min-width: 50rem) {
    padding-left: 4.25rem;
    padding-right: 4.25rem;
  }

  @media (max-width: 47.5rem) {
    display: none;
  }

  display: flex;
  align-items: center;

  &[data-variant="white"] {
    background-color: var(--footer-white);
  }

  &[data-variant="grey"] {
    background-color: var(--footer-grey);
  }

  .logo {
    font-size: 1.4rem;
    color: var(--header-logo-text);
  }

  .footer__links {
    margin-left: 1rem;
  }

  @media (min-width: 53.75rem) {
    .footer__links {
      margin-left: 3.75rem;
    }
  }

  .footer__links__link {
    color: var(--footer-link);
    text-decoration: none;
    margin-right: 1.75rem;
  }

  .footer__socials {
    color: var(--footer-link);
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .footer__socials__links {
    display: inline-block;
  }

  .footer__socials__follow-label {
    margin-right: 2.25rem;
  }

  .footer__socials__social:not(:first-child) {
    margin-left: 2rem;
  }
`;

interface Props extends HTMLAttributes<HTMLElement> {
  variant: "white" | "grey";
}

const footerLinks = [
  {
    label: "About Google Graveyard",
    link: "/about",
  },
  {
    label: "Terms",
    link: "/terms",
  },
];

function Footer({ variant, ...props }: Props) {
  return (
    <FooterBase {...props} data-variant={variant}>
      <span className="logo">
        Killed By <strong>Google</strong>
      </span>
      <div className="footer__links">
        {footerLinks.map((link) => (
          <Link to={link.link} key={link.label} className="footer__links__link">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="footer__socials">
        <span className="footer__socials__follow-label">Follow us</span>
        <div className="footer__socials__links">
          <a
            href="https://twitter.com/killedbygoogle"
            target="_blank"
            rel="noreferrer"
            className="footer__socials__social"
          >
            <img src={LogoTwitter} alt="twitter" />
          </a>
          <a
            href="https://github.com/codyogden/killedbygoogle"
            target="_blank"
            rel="noreferrer"
            className="footer__socials__social"
          >
            <img src={LogoGithub} alt="github" />
          </a>
        </div>
      </div>
    </FooterBase>
  );
}

export default Footer;

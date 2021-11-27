import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

const HamburgerLinkBase = styled.div`
  .link {
    color: var(--hamburger-link);
    text-decoration: none;
    padding: 0.5rem 0 0.5rem 1rem;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;

    &[data-selected="true"] {
      color: var(--hamburger-link-selected);
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

function HamburgerLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <HamburgerLinkBase>
      <Link to={to} {...props} className="link" data-selected={Boolean(match)}>
        {children}
      </Link>
    </HamburgerLinkBase>
  );
}

export default HamburgerLink;

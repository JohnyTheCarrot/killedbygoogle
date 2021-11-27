import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

const HeaderLinkBase = styled.div`
  padding: 0 1.25rem;

  .link {
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--header-link-text);
    box-sizing: border-box;

    &[data-selected="true"] {
      box-shadow: inset 0 -3px var(--header-link-selected);
    }
  }
`;

function HeaderLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <HeaderLinkBase>
      <Link to={to} {...props} className="link" data-selected={Boolean(match)}>
        {children}
      </Link>
    </HeaderLinkBase>
  );
}

export default HeaderLink;

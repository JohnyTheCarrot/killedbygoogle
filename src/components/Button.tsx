import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

const ButtonBase = styled.button`
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 3.3px;
  font-size: 0.875rem;
  cursor: pointer;
  font-weight: bold;

  &[data-variant="primary"] {
    background-color: var(--button-primary);
    color: var(--button-primary-foreground);
  }

  &[data-variant="ghost"] {
    background-color: var(--button-ghost);
    color: var(--button-ghost-foreground);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "ghost";
}

function Button(props: Props) {
  return (
    <ButtonBase {...props} data-variant={props.variant}>
      {props.children}
    </ButtonBase>
  );
}

export default Button;

import { SVGProps } from "react";

export function SvgHamburger(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 2.5H19"
        stroke="#FBBC04"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M2 10.5H19"
        stroke="#EA4335"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M2 18.5H19"
        stroke="#4184F3"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

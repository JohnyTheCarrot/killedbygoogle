import {SVGProps} from "react";
import {theme} from "../../style/stitches.config";

export function SvgIconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1066_121)">
        <path
          d="M13.5034 11.6667H12.8451L12.6118 11.4417C13.4284 10.4917 13.9201 9.25833 13.9201 7.91667C13.9201 4.925 11.4951 2.5 8.50343 2.5C5.51176 2.5 3.08676 4.925 3.08676 7.91667C3.08676 10.9083 5.51176 13.3333 8.50343 13.3333C9.84509 13.3333 11.0784 12.8417 12.0284 12.025L12.2534 12.2583V12.9167L16.4201 17.075L17.6618 15.8333L13.5034 11.6667ZM8.50343 11.6667C6.42843 11.6667 4.75343 9.99167 4.75343 7.91667C4.75343 5.84167 6.42843 4.16667 8.50343 4.16667C10.5784 4.16667 12.2534 5.84167 12.2534 7.91667C12.2534 9.99167 10.5784 11.6667 8.50343 11.6667Z"
          fill={theme.colors.textSecondary.toString()}
          fillOpacity="0.8"
        />
      </g>
      <defs>
        <clipPath id="clip0_1066_121">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.586761)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

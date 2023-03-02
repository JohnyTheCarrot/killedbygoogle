import { SVGProps } from "react";
import { theme } from "../../style/stitches.config";

export function SvgLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1066_78)">
        <path
          d="M21.903 23.6517H4.10207C3.0849 23.6517 2.23823 22.8829 2.19896 21.8665C2.11621 19.7251 2.13598 15.9664 2.96192 12.3219C4.10693 7.26941 6.80131 2.43646 12.9199 2.43646C17.2368 2.43646 19.8697 4.84232 21.4632 8.03369C23.2347 11.5816 23.7216 16.1004 23.8096 19.3635C23.8155 19.5799 23.8195 19.7908 23.8222 19.9955C23.831 20.6942 23.8224 21.321 23.8067 21.8502C23.7763 22.8733 22.9266 23.6517 21.903 23.6517Z"
          stroke={theme.colors.googleYellow.toString()}
          strokeWidth="4.43552"
        />
        <path
          d="M23.8222 19.9955C23.831 20.6942 23.8224 21.321 23.8067 21.8502C23.7763 22.8733 22.9266 23.6517 21.903 23.6517H4.10207C3.0849 23.6517 2.23823 22.8829 2.19896 21.8665C2.11621 19.7251 2.13598 15.9664 2.96192 12.3219C4.10693 7.26941 6.80131 2.43646 12.9199 2.43646C17.2368 2.43646 19.8697 4.84232 21.4632 8.03369"
          stroke={theme.colors.googleGreen.toString()}
          strokeWidth="4.43552"
          strokeLinecap="round"
        />
        <path
          d="M2.96192 12.3219C2.13598 15.9664 2.11621 19.7251 2.19896 21.8665C2.23823 22.883 3.0849 23.6518 4.10207 23.6518H21.903C22.9266 23.6518 23.7763 22.8733 23.8067 21.8502C23.8224 21.3211 23.831 20.6943 23.8222 19.9955"
          stroke={theme.colors.googleBlue.toString()}
          strokeWidth="4.43552"
          strokeLinecap="round"
        />
        <path
          d="M23.8096 19.7162V19.6344"
          stroke={theme.colors.googleRed.toString()}
          strokeWidth="4.43552"
          strokeLinecap="round"
        />
        <path
          d="M9.71497 12.367H16.3955"
          stroke={theme.colors.googleYellow.toString()}
          strokeWidth="3.14183"
          strokeLinecap="round"
        />
        <path
          d="M9.71497 17.242H16.3955"
          stroke={theme.colors.googleRed.toString()}
          strokeWidth="3.14183"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1066_78">
          <rect
            width="26"
            height="25.5486"
            fill="white"
            transform="translate(0 0.269806)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

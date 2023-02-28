import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      bgBackground: "#fff",
      bgHero: "#F8F9FA",
      bgHover: "#f5f5f5",
      bgActive: "#eaeaea",

      textPrimary: "#000",
      textNav: "#212124",
      textInput: "#3D3F43CC",
      textSecondary: "#3D3F43",
      textTertiary: "#606366",
      textLogo: "#777C80",
      textOnAccent: "#fff",

      accent: "#3872DF",

      borderInput: "#3D3F4333",
    },

    space: {
      0: "4px",
      1: "8px",
      2: "10px",
      3: "12px",
      4: "14px",
      5: "16px",
      6: "18px",
      7: "20px",
      8: "22px",
      9: "24px",
      10: "24px",
      11: "28px",
    },

    fonts: {
      normal: "Roboto, sans-serif",
    },

    fontSizes: {
      title: "40px",
      lg: "18px",
      md: "15px",
      sm: "14px",
    },

    fontWeights: {
      normal: 400,
      semiBold: 500,
      bold: 700,
    },

    radii: {
      rounded: "3px",
      full: "100%",
    }
  },

  media: {
    mobile: "(min-width: 640px)",
  },

  utils: {
    marginX: (value: Stitches.ScaleValue<"space">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const isMobile = { "@initial": true, "@mobile": false };
export const isNotMobile = { "@initial": false, "@mobile": true };

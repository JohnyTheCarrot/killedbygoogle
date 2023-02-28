import { styled, theme } from "../style/stitches.config";

export const Button = styled("button", {
  paddingX: theme.space["7"],
  paddingY: theme.space["4"],
  border: "none",
  borderRadius: theme.radii.rounded,
  cursor: "pointer",
  transition: "background-color 100ms",
  fontFamily: theme.fonts.normal,
  fontSize: theme.fontSizes.md,
  fontWeight: theme.fontWeights.bold,

  variants: {
    padding: {
      even: {
        padding: theme.space["4"],
      },
      wide: {
        paddingX: theme.space["11"],
      },
    },

    type: {
      ghost: {
        backgroundColor: "transparent",

        "&:hover": {
          backgroundColor: theme.colors.bgHover,
        },

        "&:active": {
          backgroundColor: theme.colors.bgActive,
        },
      },
      ghostAccented: {
        backgroundColor: "transparent",
        color: theme.colors.accent,

        "&:hover": {
          backgroundColor: theme.colors.bgHover,
        },

        "&:active": {
          backgroundColor: theme.colors.bgActive,
        },
      },
      primary: {
        backgroundColor: theme.colors.accent,
        color: theme.colors.textOnAccent,
      },
    },
  },
});

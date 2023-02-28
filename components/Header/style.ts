import { styled, theme } from "../../style/stitches.config";
import { SvgLogo } from "@/components/svg/SvgLogo";
import { Button } from "@/components/Button";

export const Header = styled("header", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  variants: {
    mobile: {
      true: {
        justifyContent: "flex-start",
        paddingLeft: theme.space["1"],
      },
      false: {
        justifyContent: "space-between",
        paddingLeft: theme.space["9"],
      },
    },
  },
});

export const Logo = styled(SvgLogo, {
  variants: {
    hidden: {
      true: {
        display: "none",
      },
      false: {
        display: "inherit",
      },
    },
  },
});

export const LogoText = styled("span", {
  color: theme.colors.textLogo,
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.semiBold,
});

export const LogoTextGoogle = styled("span", {
  fontWeight: theme.fontWeights.bold,
});

export const LogoWithText = styled("span", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.space["3"],
  paddingY: theme.space["7"],
  marginRight: theme.space["7"]
});

export const HeaderLeft = styled('div', {
  display: "flex",
  flexDirection: "row",
});

export const HeaderRight = styled('div', {
  display: "flex",
  flexDirection: "row",
  gap: theme.space["1"],
  marginRight: theme.space["2"],

  variants: {
    hidden: {
      true: {
        display: "none",
      },
      false: {
        display: "inherit",
      },
    },
  },
});

export const NavLinks = styled("div", {
  display: "flex",
  flexDirection: "row",
  marginLeft: theme.space["7"],

  variants: {
    hidden: {
      true: {
        display: "none",
      },
      false: {
        display: "inherit",
      },
    },
  },
});

export const NavLink = styled("a", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: "1 0 auto",
  paddingX: theme.space["7"],
  marginX: theme.space["0"],
  justifyContent: "space-evenly",
  cursor: "pointer",
  transition: "background-color 100ms",

  "&:hover": {
    backgroundColor: theme.colors.bgHover,
  },

  variants: {
    selected: {
      true: {
        color: theme.colors.textPrimary,
        borderBottomWidth: 2,
        borderBottomStyle: "solid",
        borderBottomColor: theme.colors.accent
      },
      false: {
        color: theme.colors.textNav
      }
    }
  }
});

export const HamburgerButton = styled(Button, {
  display: "flex",
  borderRadius: theme.radii.full,
  marginRight: theme.space["1"],

  variants: {
    hidden: {
      true: {
        display: "none",
      },
      false: {
        display: "inherit",
      },
    },
  },
});

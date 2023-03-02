import { styled, theme } from "../../style/stitches.config";
import { SvgLogo } from "@/components/svg/SvgLogo";
import Image from "next/image";

export const Hero = styled("section", {
  backgroundColor: theme.colors.bgHero,
  paddingY: 80,
  paddingX: theme.space["8"],
  display: "flex",
  justifyContent: "center",

  variants: {
    mobile: {
      true: {
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
      },
      false: {
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
      },
    },
  },
});

export const HeroContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 500,
});

export const Logo = styled(SvgLogo, {
  marginBottom: theme.space.lg,
});

export const Title = styled("h1", {
  fontSize: theme.fontSizes.title,
  fontWeight: theme.fontWeights.normal,
  color: theme.colors.textSecondary,
  marginY: 0,
});

export const Description = styled("span", {
  fontSize: theme.fontSizes.lg,
  color: theme.colors.textTertiary,
  textAlign: "center",
  marginTop: theme.space["5"],
  marginBottom: theme.space.xxl,
});

export const GoogleRed = styled("span", {
  color: theme.colors.googleRed,
  fontWeight: theme.fontWeights.bold,
});

export const GoogleBlue = styled("span", {
  color: theme.colors.googleBlue,
  fontWeight: theme.fontWeights.bold,
});

export const GoogleGreen = styled("span", {
  color: theme.colors.googleGreen,
  fontWeight: theme.fontWeights.bold,
});

export const GoogleYellow = styled("span", {
  color: theme.colors.googleYellow,
  fontWeight: theme.fontWeights.bold,
});

export const AsSeenOn = styled("div", {
  marginTop: theme.space.xl,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const AsSeenOnText = styled("span", {
  color: theme.colors.textPrimary,
  fontSize: theme.fontSizes.md,
});

export const AsSeenOnLogos = styled("div", {
  display: "flex",
  gap: theme.space["5"],
  alignItems: "center",
  marginTop: theme.space["6"],
  color: theme.colors.bgLogos,

  variants: {
    vertical: {
      true: {
        flexDirection: "column",
      },
      false: {
        flexDirection: "row",
      },
    },
  },
});

export const AsSeenOnLogo = styled(Image, {});

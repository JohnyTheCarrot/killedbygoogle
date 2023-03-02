import { styled, theme } from "../../style/stitches.config";
import {SvgIconSearch} from "@/components/svg/SvgIconSearch";

export const SearchBar = styled("div", {
  display: "flex",
  width: "100%",
  boxSizing: "border-box",
  position: "relative",
});

export const SearchIcon = styled(SvgIconSearch, {
  position: "absolute",
  top: "50%",
  left: `calc(${theme.space.xl} / 2)`,
  translate: "-25% -50%",
});

export const Input = styled("input", {
  fontSize: theme.fontSizes.md,
  color: theme.colors.textInput,
  backgroundColor: theme.colors.bgInput,
  borderRadius: theme.radii.full,
  borderColor: theme.colors.borderInput,
  borderWidth: 1,
  borderStyle: "solid",
  paddingLeft: theme.space.xl,
  paddingY: theme.space["5"],
  width: "100%",
});

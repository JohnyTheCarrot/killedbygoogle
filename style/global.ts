import { globalCss, theme } from "./stitches.config";

export const globalStyles = globalCss({
  body: {
    margin: 0,
  },
  "*": {
    fontFamily: theme.fonts.normal,
  },
  "ul": {
    padding: 0,
    margin: 0
  },
  "li": {
    listStyle: "none",
  }
});

import React from "react";
import { Head, Html, Main, NextScript } from "next/document";
import { getCssText } from "../style/stitches.config";
import { darkTheme } from "../style/darkTheme";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body className={darkTheme}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;

import type { AppProps } from "next/app";
import {globalStyles} from "../style/global";

declare global {
  interface Window {
    umami?: any;
  }
}

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <script
        async
        defer
        data-website-id={process.env.UMAMI_ID}
        src="/umami.js"
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;

import "src/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, Noto_Sans_JP } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const NotoSansJP = Noto_Sans_JP({
  subsets: ["japanese"],
  weight: "400",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luminus.</title>
        <meta name="description" content="Luminusのプロフィールページ" />
      </Head>
      <style jsx global>
        {`
          body {
            font-family: ${inter.style.fontFamily},
              ${NotoSansJP.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

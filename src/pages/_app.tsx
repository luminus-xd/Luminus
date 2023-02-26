import "src/styles/globals.scss";

import { Inter, Noto_Sans_JP } from "@next/font/google";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const NotoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
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
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
}

export default MyApp;

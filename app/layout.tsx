import { FC, PropsWithChildren } from "react";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}<span>test</span></body>
    </html>
  );
};

export default RootLayout;
import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta name="author" content="조준희"  />
        <meta name="keywords" content="ChatApp, 채팅, 실시간"  />
      </Head>
      <body>{children}</body>
    </html>
  );
}

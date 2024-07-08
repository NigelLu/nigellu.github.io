/** @format */
"client component";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nigel's Personal Website",
  description: "Hinc itur ad astra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}

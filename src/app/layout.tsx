import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google"
import localFont from "next/font/local";import "./globals.css";

export const metadata: Metadata = {
  title: "FixHouse",
  description: "Sua ajuda até em casa!",
};

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={instrumentSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}

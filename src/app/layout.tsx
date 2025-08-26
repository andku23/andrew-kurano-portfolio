import type { Metadata } from "next";
import { Inter, Sansation, Roboto } from 'next/font/google';
import "./globals.css";
import NavBar from "@/ui/navbar/navbar";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const sansation = Sansation({
  variable: "--font-sansation",
  weight: "400",
  subsets: ["latin"]
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Andrew Kurano",
  description: "Tech Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`${inter.variable} ${sansation.variable} ${roboto.variable} antialiased`}
      >
        <NavBar></NavBar>
        <div className = "h-(--navbar-height)"/>

        {children}
      </body>
    </html>
  );
}

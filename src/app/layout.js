import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/app/header/page';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <title>Force Doctrine</title>
        <meta name='A website for teaching people dark Force techniques'/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-[5.5vw]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

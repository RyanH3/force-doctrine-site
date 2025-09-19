import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Force Doctrine",
  description: "A website for teaching people dark Force techniques",
};

function Header() {
  return (
    <header>
      <div className="flex flex-row font-sans text-yellow-400 auto-cols-auto items-center bg-black px-[1vw] py-[2vw] fixed top-0 right-0 left-0">
        <Link href="/" className="float-left items-center px-[1vw]">Force Doctrine</Link>
        <nav className="flex flex-row-reverse place-items-center fixed right-0 [&>*]:px-[1vw] md:flex flex-row-reverse place-items-center fixed right-0 [&>*]:px-[1vw]">
          <Link href="/login"><button className="text-sm text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-md p-[1vw]">Log in</button></Link>
          <Link href="/about">About</Link>
          <Link href="/techniques">Techniques</Link>
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-[5.5vw]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

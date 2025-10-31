"use client";
import Link from "next/link";
import { makeUserGreeting } from '@/app/actions/queries';
import { useEffect, useState } from "react";
import { getCookieData } from "@/app/lib/session";
import { usePathname } from "next/navigation";

export default function Header() {
  const [buttonText, setButtonText] = useState("Login");
  const pathname = usePathname();

  useEffect(() => {
    async function setNavButtonText() {
      // Put username into a greeting or make a Login button
      var userID = await getCookieData();
      if (userID == "Logged out") {
        setButtonText("Login");
      }
      else {
        var userGreeting = makeUserGreeting(userID);
        setButtonText(userGreeting);
      }
    }
    setNavButtonText();
  }, [pathname]);
  
  return (
    <header>
      <div className="flex flex-row font-sans text-yellow-400 auto-cols-auto items-center bg-black px-[1vw] py-[2vw] fixed top-0 right-0 left-0">
        <Link href="/" className="float-left items-center px-[1vw]">Force Doctrine</Link>
        <nav className="flex flex-row-reverse place-items-center fixed right-0 [&>*]:px-[1vw] md:flex flex-row-reverse place-items-center fixed right-0 [&>*]:px-[1vw]">
          <Link href="/login"><button className="text-sm text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-md p-[1vw]">{buttonText}</button></Link>
          <Link href="/about">About</Link>
          <Link href="/techniques">Techniques</Link>
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}
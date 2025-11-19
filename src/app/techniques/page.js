"use client";
import { addUserPurchase, getUserPurchases } from "@/app/actions/queries";
import { getCookieData } from "@/app/lib/session";
import { useEffect, useState } from "react";
import Link from "next/link";

async function pressPurchaseButton(techniqueName) {
  // Get userID
  var userID = await getCookieData();

  // If user is logged in, check if button has been pressed
  if (userID != 'Logged out') {
    var purchases = await getUserPurchases(userID);
    var isClicked = purchases.includes(techniqueName);

    // If button has not been pressed, add the purchase to the database
    if (!isClicked) {
      await addUserPurchase(userID, techniqueName);
    }
  }
}

function Technique({ imageSource, imageAlt, title, description, price, userPurchases }) {  
  console.log(userPurchases);
  const [buttonState, setButtonState] = useState((userPurchases.includes(title)) ? "Clicked" : "Unclicked");
  const [isChargeVisible, setIsChargeVisible] = useState(false);
  var buttonClass = (buttonState === "Unclicked") ? "text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-lg m-1 p-1 px-2" : "text-black bg-emerald-500 transition duration-300 ease-in-out rounded-lg m-1 p-1 px-2";
  var buttonText = (buttonState === "Unclicked") ? "Purchase" : "Purchased";

  function showCharge() {
    if (buttonState !== "Clicked") {
      setIsChargeVisible(true);

      setTimeout(setIsChargeVisible, 0, false);
    }
  }

  return (
    <div className="flex flex-col m-[8vw] md:w-[30vw] md:m-[0vw]">
      <img
        src={`${imageSource}`}
        alt={`${imageAlt}`}
        layout="fill"
        className="rounded-lg"
      />
      <h1>{title}</h1>
      <p className="text-gray-300">{description}</p>
      <p>{price}</p>
      <div className="flex">
        <button className={buttonClass} onClick={() => { setButtonState("Clicked"); pressPurchaseButton(title); showCharge() }}>
          {buttonText}
        </button>
        <p className={`grow text-center text-red-500 place-self-center 
                      ${isChargeVisible ? "opacity-100" : "transition-opacity duration-4000 opacity-0"}`}>-{price} from your bank. Thank you.</p>
      </div>
    </div>
  );
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [userPurchases, setUserPurchases] = useState(["Logged out"]);

  // Get user purchases
  useEffect(() => {
    async function getUserPurchasesWrapper() {
      var userID = await getCookieData();
      var purchases = [];
      
      // If user is logged in, get user purchases and return it
      if (userID != 'Logged out') {
        purchases = await getUserPurchases(userID);
      }
      
      console.log(purchases);
      setUserPurchases(purchases);
      setIsLoading(false);
    }
    getUserPurchasesWrapper();
  }, []);

  // Loading page
  if (isLoading) {
    return ( 
    <div className="bg-black">
      <p className="bg-black h-[24vh] md:h-[17vh]"></p>
      <img
        src={"/Images/Force Doctrine Logo.png"}
        alt={"Tryphowon's crest"}
        layout="fill"
        className="bg-black place-self-center animate-spin w-[30vh] md:w-[30vw]"
      />
    </div>
    );
  }

  return (
    <div className="font-sans flex flex-col bg-black text-yellow-400">
      <div className="bg-contain bg-[url(/Images/Force_Techniques_Banner.webp)] text-center">
        <h1 className="text-5xl font-bold mt-[10vw]">Force Techniques</h1>
        <p className="text-gray-300 mx-[6vw] md:mx-[24vw] mb-[14vw]">These are some of the Force techniques I rate highly. I learned some and invented others. Use them at your own risk.</p>
      </div>

      <div className="md:grid grid-cols-2 grid-rows-3 justify-items-center md:m-[2vw]">
        <Technique imageSource="/Images/Force Lightning.webp" imageAlt="Lightning coming out of Tryphowon's hands" title="Force Lightning" description="A classic technique. Great for charging phones." price="$160.00" userPurchases={userPurchases}/>
        <Technique imageSource="/Images/Force Autochromia.webp" imageAlt="A close-up of Tryphowon's eye" title="Force Autochromia" description="Use the chaotic wisdom of the dark side to change the color of your eyes. Popular among young Sith." price="$50.00" userPurchases={userPurchases}/>
        <Technique imageSource="/Images/Force Illusion.webp" imageAlt="Tryphowon holding up four fingers...or is it three?" title="Force Illusion" description="Manipulate anyone’s perception of reality. Works wirelessly." price="$200.00" userPurchases={userPurchases}/>
        <Technique imageSource="/Images/Force Choke.webp" imageAlt="Tryphowon Force choking himself in the mirror" title="Force Choke" description="This crude technique uses hatred and causes fear. Only use this to cure hiccups." price="$210.00" userPurchases={userPurchases}/>
        <Technique imageSource="/Images/Force Teleport.webp" imageAlt="A cup of spilt water floating over Tryphowon, having been teleported to him" title="Force Teleport" description="Transport an item from one place to another instantaneously using another life form as an anchor. Good communication is vital." price="$360.00" userPurchases={userPurchases}/>
        <Technique imageSource="/Images/Force Hack.webp" imageAlt="Tryphowon giving himself ten thousand Robux on Roblox.com" title="Force Hack" description="Connect to and access any computer system you know the location of. Please do not hack my website." price="$80.00" userPurchases={userPurchases}/>
      </div>

      <div className="flex flex-row justify-center gap-x-[4.5vw] mt-[12vw] mb-[4vw] [&>*]:w-[20vw] md:gap-x-[18vw] md:mt-[12vw] md:mb-[4vw] md:[&>*]:w-[5vw]">
        <img
          src="/Images/Sith Eternal Crest.webp"
          alt="The Sith Eternal crest"
        />
        <Link href="/secret-techniques" className="hover:shadow-xl shadow-yellow-400 transition duration-600 ease-in-out rounded-lg">
          <img
            src="/Images/Sith Emblem.webp"
            alt="The Sith emblem"
          />
        </Link>
        <img
          src="/Images/Sith Empire Logo.webp"
          alt="The Sith Empire logo"
        />
        <img
          src="/Images/Sith Order Symbol.webp"
          alt="The Sith Order symbol"
        />
      </div>
    </div>
  );
}
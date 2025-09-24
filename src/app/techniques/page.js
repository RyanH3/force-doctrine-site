"use client"
import { useState } from "react";

function Technique({ imageSource, imageAlt, title, description, price }) {
  const [buttonState, setButtonState] = useState("Unclicked");
  var buttonClass = (buttonState === "Unclicked") ? "text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-lg m-1 p-1 px-2" : "text-black bg-emerald-500 transition duration-300 ease-in-out rounded-lg m-1 p-1 px-2";
  var buttonText = (buttonState === "Unclicked") ? "Purchase" : "Purchased";

  return (
    <div className="m-[8vw] md:w-[30vw] md:m-[0vw]">
      <img
        src={`${imageSource}`}
        alt={`${imageAlt}`}
        layout="fill"
      />
      <h1>{title}</h1>
      <p className="text-gray-300">{description}</p>
      <p>{price}</p>
      <button className={buttonClass} onClick={() => setButtonState("Clicked")}>
        {buttonText}
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <div className="font-sans flex flex-col bg-black text-yellow-400">
      <div className="bg-contain bg-[url(/Images/Force_Techniques_Banner.png)] text-center">
        <h1 className="text-5xl font-bold mt-[10vw]">Force Techniques</h1>
        <p className="text-gray-300 mx-[6vw] md:mx-[24vw] mb-[14vw]">These are some of the Force techniques I rate highly. I learned some and invented others. Use them at your own risk.</p>
      </div>

      <div className="md:grid grid-cols-2 grid-rows-3 justify-items-center md:m-[2vw]">
        <Technique imageSource="/Images/Force Lightning.png" imageAlt="Lightning coming out of Tryphowon's hands" title="Force Lightning" description="A classic technique. Great for charging phones." price="$160.00"/>
        <Technique imageSource="/Images/Force Autochromia.webp" imageAlt="A close-up of Tryphowon's eye" title="Force Autochromia" description="Use the chaotic wisdom of the dark side to change the color of your eyes. Popular among young Sith." price="$50.00"/>
        <Technique imageSource="/Images/Force Illusion.png" imageAlt="Tryphowon holding up four fingers...or is it three?" title="Force Illusion" description="Manipulate anyone’s perception of reality. Works wirelessly." price="$200.00"/>
        <Technique imageSource="/Images/Force Choke.png" imageAlt="Tryphowon Force choking himself in the mirror" title="Force Choke" description="This crude technique uses hatred and causes fear. Only use this to cure hiccups." price="$210.00"/>
        <Technique imageSource="/Images/Force Teleport.png" imageAlt="A cup of spilt water floating over Tryphowon, having been teleported to him" title="Force Teleport" description="Transport an item from one place to another instantaneously using another life form as an anchor. Good communication is vital." price="$360.00"/>
        <Technique imageSource="/Images/Force Hack.png" imageAlt="Tryphowon giving himself ten thousand Robux on Roblox.com" title="Force Hack" description="Connect to and access any computer system you know the location of. Please do not hack my website." price="$80.00"/>
      </div>
    </div>
  );
}
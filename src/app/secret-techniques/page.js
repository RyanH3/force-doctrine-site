"use client"
import { useState } from "react";

function Technique({ imageSource, imageAlt, title, description, price }) {
  const [buttonState, setButtonState] = useState("Unclicked");
  var buttonClass = (buttonState === "Unclicked") ? "text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-lg m-1 p-1 px-2" : "text-black bg-emerald-500 transition duration-300 ease-in-out rounded-lg m-1 p-1 px-2";
  var buttonText = (buttonState === "Unclicked") ? "Purchase" : "Purchased";
  
  return (
    <div className="m-[8vw] md:w-[30vw] md:m-[0vw] md:mb-[1vw]">
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
      <div className="bg-[url(/TempImage.jpg)] text-center">
        <h1 className="text-5xl font-bold mt-[10vw]">Secret Techniques</h1>
        <p className="text-gray-300 mx-[6vw] md:mx-[24vw] mb-[12vw]">So you are a particularly learned and observant student of the dark side. Welcome. These are techniques I do not yet fully understand, and therefore cannot openly endorse. Please use them with extreme care.</p>
      </div>
      
      <div className="md:grid grid-cols-2 grid-rows-3 justify-items-center md:m-[2vw]">
        <Technique imageSource="/TempImage.jpg" imageAlt="Tryphowon draining the battery from a cellphone" title="Force Drain" description="Drain the energy from any life force. Make sure to get consent if you plan to use this on living organisms." price="$13,000.00"/>
        <Technique imageSource="/TempImage.jpg" imageAlt="Tryphowon healing a cut on his finger" title="Force Heal" description="This is a simple technique and it is helpful, rather than dangerous, but many Sith have told me I should not share this one. I do not know why, so I put the technique here as a compromise." price="$18.00"/>
        <Technique imageSource="/TempImage.jpg" imageAlt="Tryphowon playing Heads Up with Obi-Wan Kenobi" title="Force Evocation" description="Summon the spirits of people who have become one with the Force and communicate with them. They can stay as long as they want, though, so make sure your social battery is full." price="$4,000.00"/>
        <Technique imageSource="/TempImage.jpg" imageAlt="A dog standing on its hind legs. Tryphowon is looking at it" title="Force Command" description="Imbue anything you touch, living or nonliving, with a command. Only works once per thing, per command. My old phone is still Googling “how many cups is 2 tablespoons” after 7 years." price="$7,000.00"/>
        <Technique imageSource="/TempImage.jpg" imageAlt="Tryphowon looking at a Spectrum News 13 live traffic map" title="Force Foresight" description="Tap into the dark side of the Force to see the future events that will happen within the cone of your vision. Beware of using this in bathrooms." price="$6,000.00"/>
        <Technique imageSource="/TempImage.jpg" imageAlt="Tryphowon turning hay into animal crackers" title="Force Transmutation" description="Use the Force to manipulate materials at a subatomic level, changing one thing to another. If the mass of the two materials are unequal, however, the extra energy will result in an explosion." price="$80.00"/>
      </div>
    </div>
  );
}
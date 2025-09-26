import Link from "next/link";

function ApprenticeReview({ quote, imageSource, imageAlt, userName, userSubtitle }) {
  return (
    <div className="outline outline-white rounded-lg w-[88vw] h-[56vw] mb-[8vw] md:outline outline-white rounded-lg md:w-[22vw] md:h-[14vw] md:mb-[0vw]">
      <div className="h-[24vw] m-[8vw] md:h-[6vw] md:m-[2vw]">
        <p className="text-xl md:text-[1.5vw]">{quote}</p>
      </div>
      
      <div className="grid grid-cols-[max-content_1fr] grid-rows-2 ml-[6vw] md:ml-[1.5vw]">
        <img
          src={`${imageSource}`}
          alt={`${imageAlt}`}
          className="row-span-2 w-[12vw] mr-[4vw] rounded-lg md:row-span-2 md:w-[3vw] md:mr-[1vw]"
        />
        <p className="text-xs md:text-[0.9vw]">{userName}</p>
        <p className="text-xs text-gray-300 md:text-[0.9vw]">{userSubtitle}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-black text-yellow-400 flex flex-col font-sans">
      <img
        src="/Images/Red Aurora Borealis.jpg"
        alt="Cool red, shadowy image that perfectly encapsulates the dark side of the Force"
        layout="fill"
      />
      <div className="text-center">
        <h1 className="text-5xl font-bold py-[3vw]">Knowledge is power</h1>
        <p className="text-gray-300 mx-[8vw]">Below is a list of techniques used by wielders of the dark side of the Force. Some are common, some are less common. You may pay to learn how to use any of them, but some come with a cost beyond money.</p>
      </div>
      <div className="text-center mt-[2vw] mb-[3vw]">
        <Link href="/techniques"><button className="text-black p-[1vw] bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-sm m-1">Techniques</button></Link>
      </div>
      
      <h2 className="text-4xl font-semibold py-[3vw] mx-[9vw]">Apprentice reviews</h2>
      <div className="flex flex-col place-items-center md:flex-row gap-[2vw] justify-center">
        <ApprenticeReview quote='“I wish these techniques were this accessible when I was growing up”' imageSource="/Images/Sheev Palpatine Profile Picture.jpg" imageAlt="Emperor Palpatine when he was a chancellor" userName="Sheev Palpatine" userSubtitle="Former Emperor of the Galactic Empire"/>
        <ApprenticeReview quote='“These techniques help me a lot in my day-to-day”' imageSource="/Images/Nim Jong Un Profile Picture.jpg" imageAlt="A smartly dressed Korean woman" userName="Nim Jong Un" userSubtitle="Supreme Leader of North Dorea"/>
        <ApprenticeReview quote='“You won’t get away with this. Take this website down immediately.”' imageSource="/Images/Obi-Wan Kenobi Profile Picture.jpg" imageAlt="Obi-Wan Kenobi as a Force Ghost" userName="Obi-Wan Kenobi" userSubtitle="Legendary Jedi Master"/>
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

import Link from "next/link";

function ApprenticeReview({ quote, imageSource, imageAlt, userName, userSubtitle }) {
  return (
    <div className="outline outline-white rounded-lg w-[22vw] h-[14vw]">
      <div className="h-[8vw] m-[2vw] mb-0">
        <p>{quote}</p>
      </div>
      
      <div className="grid grid-cols-[max-content_1fr] grid-rows-2 ml-[1.5vw]">
        <img
          src={`${imageSource}`}
          alt={`${imageAlt}`}
          className="row-span-2 w-[3vw] mr-[1vw]"
        />
        <p className="text-xs">{userName}</p>
        <p className="text-xs text-gray-300">{userSubtitle}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-black text-yellow-400 flex flex-col font-sans">
      <img
        src="/TempImage.jpg"
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
      <div className="flex flex-col md:flex-row gap-[2vw] justify-center">
        <ApprenticeReview quote='“I wish these techniques were this accessible when I was growing up”' imageSource="/TempImage.jpg" imageAlt="Emperor Palpatine when he was a chancellor" userName="Sheev Palpatine" userSubtitle="Former Emperor of the Galactic Empire"/>
        <ApprenticeReview quote='“These techniques help me a lot in my day-to-day”' imageSource="/TempImage.jpg" imageAlt="A smartly dressed Korean woman" userName="Nim Jong Un" userSubtitle="Supreme Leader of North Dorea"/>
        <ApprenticeReview quote='“You won’t get away with this. Take this website down immediately.”' imageSource="/TempImage.jpg" imageAlt="Obi-Wan Kenobi as a Force Ghost" userName="Obi-Wan Kenobi" userSubtitle="Legendary Jedi Master"/>
      </div>
      
      <div className="flex flex-row justify-center gap-x-[18vw] mt-[12vw] mb-[4vw]">
        <img
          src="/TempImage.jpg"
          alt="The Sith Eternal crest"
          className="w-[5vw]"
        />
        <Link href="/secret-techniques" className="hover:shadow-xl shadow-yellow-400 transition duration-600 ease-in-out">
          <img
            src="/TempImage.jpg"
            alt="The Sith emblem"
            className="w-[5vw]"
          />
        </Link>
        <img
          src="/TempImage.jpg"
          alt="The Sith Empire logo"
          className="w-[5vw]"
        />
        <img
          src="/TempImage.jpg"
          alt="The Sith Order symbol"
          className="w-[5vw]"
        />
      </div>
    </div>
  );
}

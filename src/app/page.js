import Link from "next/link";

function ApprenticeReview({ quote, imageSource, imageAlt, userName, userSubtitle }) {
  return (
    <div className="outline outline-white rounded-lg">
      <p>{quote}</p>
      <img
        src={`${imageSource}`}
        alt={`${imageAlt}`}
        width={45} height={45}
      />
      <p>{userName}</p>
      <p className="text-gray-300">{userSubtitle}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-black text-yellow-400 flex flex-col">
      <img
        src="/TempImage.jpg"
        alt="Cool red, shadowy image that perfectly encapsulates the dark side of the Force"
        layout="fill"
      />
      <div className="text-center">
        <h1>Knowledge is power</h1>
        <p className="text-gray-300">Below is a list of techniques used by wielders of the dark side of the Force. Some are common, some are less common. You may pay to learn how to use any of them, but some come with a cost beyond money.</p>
      </div>
      <div className="text-center">
        <Link href="/techniques"><button className="text-black bg-red-500 hover:bg-red-600 focus:outline-2 focus:outline-offset-2 focus:outline-red-500 active:bg-red-700 rounded-lg m-1 p-1 px-2">Techniques</button></Link>
      </div>
      
      <h2>Apprentice reviews</h2>
      <section className="flex flex-col md:flex-row">
        <ApprenticeReview quote='“I wish these techniques were this accessible when I was growing up”' imageSource="/TempImage.jpg" imageAlt="Emperor Palpatine when he was a chancellor" userName="Sheev Palpatine" userSubtitle="Former Emperor of the Galactic Empire"/>
        <ApprenticeReview quote='“These techniques help me a lot in my day-to-day”' imageSource="/TempImage.jpg" imageAlt="A smartly dressed Korean woman" userName="Nim Jong Un" userSubtitle="Supreme Leader of North Dorea"/>
        <ApprenticeReview quote='“You won’t get away with this. Take this website down immediately.”' imageSource="/TempImage.jpg" imageAlt="Obi-Wan Kenobi as a Force Ghost" userName="Obi-Wan Kenobi" userSubtitle="Legendary Jedi Master"/>
      </section>
      
      <div className="flex flex-row justify-center gap-x-4">
        <img
          src="/TempImage.jpg"
          alt="The Sith Eternal crest"
          width={45} height={45}
        />
        <Link href="/secret-techniques">
          <img
            src="/TempImage.jpg"
            alt="The Sith emblem"
            width={45} height={45}
          />
        </Link>
        <img
          src="/TempImage.jpg"
          alt="The Sith Empire logo"
          width={45} height={45}
        />
        <img
          src="/TempImage.jpg"
          alt="The Sith Order symbol"
          width={45} height={45}
        />
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-yellow-400">
      <img
        src="/TempImage.jpg"
        alt="Cool red, shadowy image that perfectly encapsulates the dark side of the Force"
        layout="fill"
      />
      <h1>Knowledge is power</h1>
      <p className="text-gray-400">Below is a list of techniques used by wielders of the dark side of the Force. Some are common, some are less common. You may pay to learn how to use any of them, but some come with a cost beyond money.</p>
      <div>
        <Link href="/techniques">Techniques</Link>
      </div>
      
      <h2>Apprentice reviews</h2>
      <div>
        <p>“I wish these techniques were this accessible when I was growing up”</p>
        <img
          src="/TempImage.jpg"
          alt="Emperor Palpatine when he was a chancellor"
          width={45} height={45}
        />
        <p>Sheev Palpatine</p>
        <p className="text-gray-400">Former Emperor of the Galactic Empire</p>
      </div>
      <div>
        <p>“These techniques help me a lot in my day-to-day”</p>
        <img
          src="/TempImage.jpg"
          alt="A smartly dressed Korean woman"
          width={45} height={45}
        />
        <p>Nim Jong Un</p>
        <p className="text-gray-400">Supreme Leader of North Dorea</p>
      </div>
      <div>
        <p>“You won’t get away with this. Take this website down immediately.”</p>
        <img
          src="/TempImage.jpg"
          alt="Obi-Wan Kenobi as a Force Ghost"
          width={45} height={45}
        />
        <p>Obi-Wan Kenobi</p>
        <p className="text-gray-400">Legendary Jedi Master</p>
      </div>

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
  );
}

function Technique({ imageSource, imageAlt, title, description, price }) {
  return (
    <div className="w-72/100">
      <img
        src={`${imageSource}`}
        alt={`${imageAlt}`}
        layout="fill"
      />
      <h1>{title}</h1>
      <p className="text-gray-300">{description}</p>
      <p>{price}</p>
      <button className="text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-lg m-1 p-1 px-2">
        Purchase
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col bg-black text-yellow-400">
      <div className="bg-[url(/TempImage.jpg)] text-center">
        <h1>Force Techniques</h1>
        <p className="text-gray-300">These are some of the Force techniques I rate highly. I learned some and invented others. Use them at your own risk.</p>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 place-items-center">
        <Technique imageSource="/TempImage.jpg" imageAlt="Lightning coming out of Tryphowon's hands" title="Force Lightning" description="A classic technique. Great for charging phones." price="$160.00"/>
        <Technique imageSource="/TempImage.jpg" imageAlt="A close-up of Tryphowon's eye" title="Force Autochromia" description="Use the chaotic wisdom of the dark side to change the color of your eyes. Popular among young Sith." price="$50.00"/>
        <Technique imageSource="/TempImage.jpg" imageAlt="Tryphowon holding up four fingers...or is it three?" title="Force Illusion" description="Manipulate anyone’s perception of reality. Works wirelessly." price="$200.00"/>
        <Technique imageSource="/TempImage.jpg" imageAlt="Tryphowon Force choking himself in the mirror" title="Force Choke" description="This crude technique uses hatred and causes fear. Only use this to cure hiccups." price="$210.00"/>
        <Technique imageSource="/TempImage.jpg" imageAlt="A cup of spilt water floating over Tryphowon, having been teleported to him" title="Force Teleport" description="Transport an item from one place to another instantaneously using another life form as an anchor. Good communication is vital." price="$360.00"/>
        <Technique imageSource="/TempImage.jpg" imageAlt="Tryphowon giving himself ten thousand Robux on Roblox.com" title="Force Hack" description="Connect to and access any computer system you know the location of. Please do not hack my website." price="$80.00"/>
      </div>
    </div>
  );
}
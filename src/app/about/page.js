export default function Page() {
  return (
    <main className="flex flex-col bg-black text-yellow-400">
      <h1>About the Instructor</h1>
      <div className="text-gray-300">  
        <img
          src="/TempImage.jpg"
          alt="A portrait of Tryphowon"
          width={508} height={607}
          className="float-right"
        />

        <p>I have over a millennium of experience practicing and experimenting with the dark side of the Force.</p>
        <p></p>
        <p>The most accurate modern translation of my name could be described as the sound of a dead tree falling in the forest. Most people, however, find that difficult to pronounce. Instead they use the name given to me by my acolytes, Tryphowon. I was born 26,000 years and 360 days Before the Battle of Yavin. From a young age, my family and I were taught to feel and move the Force.</p>
        <p></p>
        <p>When I discovered the dark side, I asked my parents about it. They could only teach me its dangers, so I was mostly self-taught. Due to a carelessly executed technique, I was cursed with an extended life span and lost everyone I loved to time.</p>
      </div>

      <h2>Contact me</h2>
      <p>For clarification of concepts, ideas for new techniques, or if you want to hang out</p>

      <form className="grid grid-cols-2 grid-rows-[max-content_1fr]">
        <label htmlFor="first-name">First Name:</label>
        <label htmlFor="last-name">Last Name:</label>
        <input className="outline outline-white text-gray-400" id="first-name" type="text" name="first-name"/>
        <input className="outline outline-white text-gray-400" id="last-name" type="text" name="last-name"/>
        <label className="col-span-2" htmlFor="email">Email address:</label>
        <input className="col-span-2 outline outline-white text-gray-400" id="email" type="email" name="email" required/>
        <label className="col-span-2" htmlFor="message">Your message:</label>
        <textarea className="col-span-2 outline outline-white text-gray-400" id="message" name="message" rows={4} required></textarea>
        <button type="submit" className="col-span-2 text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-lg m-1 p-1 px-2">
          Submit
        </button>
      </form>
    </main>
  );
}
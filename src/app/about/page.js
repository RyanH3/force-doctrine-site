export default function Page() {
  return (
    <main className="bg-black text-yellow-400">
      <h1>About the Instructor</h1>
      <div className="text-gray-400">  
        <p>I have over a millennium of experience practicing and experimenting with the dark side of the Force.</p>
        <p></p>
        <p>The most accurate modern translation of my name could be described as the sound of a dead tree falling in the forest. Most people, however, find that difficult to pronounce. Instead they use the name given to me by my acolytes, Tryphowon. I was born 26,000 years and 360 days Before the Battle of Yavin. From a young age, my family and I were taught to feel and move the Force.</p>
        <p></p>
        <p>When I discovered the dark side, I asked my parents about it. They could only teach me its dangers, so I was mostly self-taught. Due to a carelessly executed technique, I was cursed with an extended life span and lost everyone I loved to time.</p>
      </div>

      <img
        src="/TempImage.jpg"
        alt="A portrait of Tryphowon"
        width={508} height={607}
      />

      <h2>Contact me</h2>
      <p>For clarification of concepts, ideas for new techniques, or if you want to hang out</p>

      <p>TODO: Add form</p>
    </main>
  );
}
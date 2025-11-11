"use client"
import { useState } from "react";

function ContactConfirmation({ name, email, message, isSubmitted }) {
  return (
    <div className={`
          outline outline-white rounded-md transition-opacity ease-in-out duration-3000
          ${isSubmitted ? "opacity-100" : "opacity-0"}
          mt-[6vw] md:w-[36vw] md:max-h-[24vw] md:ml-[6vw] md:mt-[6vw]
          `}>
      <h2 className="bg-red-500 p-[1vw] mb-[1vw] text-2xl font-semibold">Thank you, {name}</h2>
      <p className="pl-[1vw] pr-[1vw] pb-[1vw] text-gray-300 mb-[1vw]">Your message,<br/><br/>"{message}"<br/><br/>is being sent to me telepathically from {email}.</p>
    </div>
  );
}

export default function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  async function submitForm(formData) {
    setFormFields({
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      message: formData.get("message")
    });

    var alertText = "First name: " + formFields.firstName + "\n" +
                    "Last name: " + formFields.lastName + "\n" +
                    "Email: " + formFields.email + "\n" +
                    "Message: "+ formFields.message
    
    console.log(alertText);

    setIsSubmitted(true);

    setTimeout(setIsSubmitted, 1000 * 10, false);
  }

  return (
    <main className="font-sans flex flex-col bg-black text-yellow-400 p-[6vw]">
      <div className="text-gray-300 mb-[4vw] md:flex flex-row text-gray-300 mb-[4vw]">  
        <div className="md:max-w-[36vw] md:mr-[13vw]">
          <h1 className="mb-[1vw] text-5xl text-yellow-400 font-bold">About the Instructor</h1>
          <p>I have over a millennium of experience practicing and experimenting with the dark side of the Force.</p>
          <br/>
          <p>The most accurate modern translation of my name could be described as the sound of a dead tree falling in the forest. Most people, however, find that difficult to pronounce. Instead they use the name given to me by my acolytes, Tryphowon. I was born 26,000 years and 360 days Before the Battle of Yavin. From a young age, my family and I were taught to feel and move the Force.</p>
          <br/>
          <p>When I discovered the dark side, I asked my parents about it. They could only teach me its dangers, so I was mostly self-taught. Due to a carelessly executed technique, I was cursed with an extended life span and lost everyone I loved to time.</p>
        </div>
        <div className="mt-[2vw] md:w-[20vw] md:ml-[5vw] object-fill">
          <img
            src="/Images/Tryphowon.webp"
            alt="A portrait of Tryphowon"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="max-w-[96vw] md:max-w-[96vw] md:flex flex-row">
        {/* Contact me page */}
        <div className="ml-[2.5vw] md:max-w-[36vw]">
          <h2 className="mb-[1vw] text-2xl font-semibold">Contact me</h2>
          <p className="text-gray-300 mb-[1vw]">For clarification of concepts, ideas for new techniques, or if you want to hang out</p>

          <form className="grid grid-cols-2 grid-rows-[max-content_1fr]" action={submitForm}>
            <label htmlFor="first-name">First Name:</label>
            <label htmlFor="last-name">Last Name:</label>
            <input className="mr-[2vw] mb-[1vw] outline outline-white text-gray-400 rounded-md" id="first-name" type="text" name="first-name"/>
            <input className="mr-[2vw] mb-[1vw] outline outline-white text-gray-400 rounded-md" id="last-name" type="text" name="last-name"/>
            <label className="col-span-2" htmlFor="email">Email address:</label>
            <input className="mr-[2vw] mb-[1vw] col-span-2 outline outline-white text-gray-400 rounded-md" id="email" type="email" name="email" required/>
            <label className="col-span-2" htmlFor="message">Your message:</label>
            <textarea className="mr-[2vw] mb-[1vw] col-span-2 outline outline-white text-gray-400 rounded-md" id="message" name="message" rows={4} required></textarea>
            <button type="submit" className="mr-[2vw] p-[0.5vw] col-span-2 text-black text-sm bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-md p-1 px-2">
              Submit
            </button>
          </form>
        </div>

        <ContactConfirmation name={formFields.firstName} email={formFields.email} message={formFields.message} isSubmitted={isSubmitted} />
      </div>
    </main>
  );
}
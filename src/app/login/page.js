"use client";
import { createClient } from '@supabase/supabase-js';
import Link from "next/link";
import { useState } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Page() {
  const [message, setMessage] = useState(null);
  
  async function submitForm(formData) {
    // Get data from the form
    const formFields = {
      email: formData.get("email"),
      password: formData.get("password")
    };

    // Create Vercel log
    var alertText = "Email: " + formFields.email + "\n" +
                    "Password: "+ formFields.password
    
    console.log(alertText);

    // Get password from database by email
    let { data: users, error } = await supabase
      .from('users')
      .select('password')
      .eq('email', formFields.email);
    
    // Vercel log
    if (users.length == 0) {
      console.log("users is empty.");
    }
    else {
      console.log(users[0].password);
    }
    console.log(error);

    // Display login message or fail message
    if (users.length == 0) {
      setMessage("Incorrect email.");
    }
    else if (users[0].password !== formFields.password) {
      setMessage("Incorrect password.");
    }
    else {
      setMessage("Login successful!");
    }
  }

  return (
    <main className="flex font-sans bg-black text-yellow-400 place-content-center">
      <form className="grid grid-cols-1 grid-rows-5 items-end mt-[24vw] md:max-w-[20vw] md:mt-[6vw]" action={submitForm}>
        <label htmlFor="email">Email address:</label>
        <input className="mb-[1vw] outline outline-white rounded-lg text-gray-400" id="email" type="email" name="email" required/>
        <label htmlFor="password">Password:</label>
        <input className="mb-[1vw] outline outline-white rounded-lg text-gray-400" id="password" type="password" name="password"/>
        <button type="submit" className="mt-[0.5vw] text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-lg p-1 px-2">
          Sign in
        </button>
        <div className="mt-[1vw]">
          <Link href="/register" className="underline">Don&apos;t have an account? Register</Link>
        </div>
        <div>
          <p className='text-gray-400'>{message}</p>
        </div>
      </form>
    </main>
  );
}
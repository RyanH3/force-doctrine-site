"use server";

import { createSession } from '@/app/lib/session';
import { redirect } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function signup(formData) {
  
  // Get data from the form
  const formFields = {
    email: formData.get("email"),
    password: formData.get("password")
  };

  // Create Vercel log
  var alertText = "Email: " + formFields.email + "\n" +
                  "Password: " + formFields.password;
  console.log(alertText);

  // Get password from database by email
  let { data: user, error } = await supabase
    .from('users')
    .select('id, name, email, password')
    .eq('email', formFields.email);
  
  // Vercel log
  if (user.length == 0) {
    console.log("user is empty.");
  }
  else {
    console.log(user[0].password);
  }
  console.log(error);

  // Display login message or fail message
  if (user.length == 0) {
    console.log("Incorrect email.");
  }
  else if (user[0].password !== formFields.password) {
    console.log("Incorrect password.");
  }
  else {
    console.log(user);
    console.log('Login successful!');
    await createSession(user[0].id);
    redirect('/');
  }  
}
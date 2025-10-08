import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qvsoacwvxrpntwhcehkf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2c29hY3d2eHJwbnR3aGNlaGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3Njg4MjksImV4cCI6MjA3NTM0NDgyOX0.T1o6YVz1li6xAy8rLPv8F_9LJZN3R8_WMbz0j10gEUM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Page() {
  async function insertUser(inputName, inputEmail, inputPassword) {
    "use server"
    const { data, error } = await supabase
      .from('users')
      .insert([
        { name: inputName, email: inputEmail, password: inputPassword }
      ])
      .select()
  };
  
  async function submitForm(formData) {
    "use server";
    const formFields = {
      userName: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password")
    };

    var alertText = "Username: " + formFields.userName + "\n" +
                    "Email: " + formFields.email + "\n" +
                    "Password: "+ formFields.password;
    
    console.log(alertText);

    insertUser(formFields.userName, formFields.email, formFields.password);
  };
  
  return (
    <main className="flex font-sans bg-black text-yellow-400 place-content-center">
      <form className="grid grid-cols-1 grid-rows-7 items-end mt-[24vw] md:max-w-[20vw] md:mt-[6vw]" action={submitForm}>
        <label htmlFor="username">Username:</label>
        <input className="mb-[1vw] outline outline-white rounded-lg text-gray-400" id="username" type="text" name="username"/>
        <label htmlFor="email">Email address:</label>
        <input className="mb-[1vw] outline outline-white rounded-lg text-gray-400" id="email" type="email" name="email" required/>
        <label htmlFor="password">Password:</label>
        <input className="mb-[1vw] outline outline-white rounded-lg text-gray-400" id="password" type="password" name="password"/>
        <button type="submit" className="text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-lg p-1 px-2">
          Sign up
        </button>
      </form>
    </main>
    );
}
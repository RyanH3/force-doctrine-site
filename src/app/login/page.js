import Link from "next/link";

export default function Page() {
  async function submitForm(formData) {
    "use server"
    const formFields = {
      email: formData.get("email"),
      password: formData.get("password")
    };

    var alertText = "Email: " + formFields.email + "\n" +
                    "Password: "+ formFields.password
    
    console.log(alertText);
  }

  return (
    <main className="flex font-sans bg-black text-yellow-400 place-content-center">
      <form className="grid grid-cols-1 grid-rows-5 items-end max-w-[20vw] mt-[6vw]" action={submitForm}>
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
      </form>
    </main>
  );
}
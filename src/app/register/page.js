export default function Page() {
  return (
    <main className="bg-black text-yellow-400">
      <h1>Register</h1>
      <form className="grid grid-cols-1 grid-rows-7">
        <label htmlFor="username">Username:</label>
        <input className="outline outline-white text-gray-400" id="username" type="text" name="username"/>
        <label htmlFor="email">Email address:</label>
        <input className="outline outline-white text-gray-400" id="email" type="email" name="email" required/>
        <label htmlFor="password">Password:</label>
        <input className="outline outline-white text-gray-400" id="password" type="password" name="password"/>
        <button type="submit" className="text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-lg m-1 p-1 px-2">
          Sign up
        </button>
      </form>
    </main>
    );
}
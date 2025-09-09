export default function Page() {
  return (
    <main className="bg-black text-yellow-400">
      <div>
        <label htmlFor="username">Username:</label>
        <input className="bg-stone-950 text-gray-400" id="username" type="text" name="username"/>
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input className="bg-stone-950 text-gray-400" id="email" type="email" name="email" required/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input className="bg-stone-950 text-gray-400" id="password" type="password" name="password"/>
      </div>
      <button type="submit">
        Sign up
      </button>
    </main>
    );
}
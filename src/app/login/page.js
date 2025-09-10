import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-black text-yellow-400">
      <h1>Log in</h1>
      <form>
        <div>
          <label htmlFor="email">Email address:</label>
          <input className="bg-stone-950 text-gray-400" id="email" type="email" name="email" required/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className="bg-stone-950 text-gray-400" id="password" type="password" name="password"/>
        </div>
        <button type="submit">
          Sign in
        </button>
        <div>
          <Link href="/register">Don&apos;t have an account? Register</Link>
        </div>
      </form>
    </main>
  );
}
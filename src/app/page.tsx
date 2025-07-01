"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {

  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col w-[120px] p-2">
        <p>Name: {session.user?.name}</p>
        <img className="w-[40px] self-center" src={session.user?.image ?? ""} />
        <p><button className="self-center"onClick={() => signOut()}>Sign out</button></p>
      </div>
    )
  }
  /* or <button onClick={() => signIn('google')}>Google</button> */ /*add the following line and uncomment in .env for google auth */
  return (
    <div>
      <p>You are not logged in, sign in here with <button onClick={() => signIn('github')}>GitHub</button></p>
    </div>
  );
}

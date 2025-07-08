"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function Navigation() {

  const user = useQuery({
    queryKey: ['user'],
    queryFn: api.getCurrentUser,
  });

  return (
    <nav id="navigation" className="p-8 flex flex-col gap-6 justify-center">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHIZuDb--IJ-q5d97gWm1W2eyLj7BePcWnQ&s" 
        className="w-16"
        alt="logo"
        id="navigation-logo"
      />
      <Link href="/app" className="text-xl font-semibold hover:underline">Home</Link>
      <Link href={user.isSuccess ? "/app/profile/" + user.data.id : "/app"} className="text-xl font-semibold hover:underline">Profile</Link>
      <Link href="#" className="text-xl font-semibold hover:underline">Notifications</Link>
      <section id="navigation-sign-out">
        <button onClick={() => signOut()} className="text-xl font-semibold hover:underline hover:cursor-pointer">Sign Out</button>
      </section>
      <Link href="/app" className="bg-blue-400 p-2 text-white text-center rounded-full hover:bg-blue-500">New Tweet</Link>
    </nav>
  )
};
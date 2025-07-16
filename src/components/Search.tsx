"use client";
import api from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";

export default function Search() {

  const [ searchData, setSearchData ] = useState("");

  const searchUsers = useMutation({
    mutationFn: () => api.searchUsers({content: searchData}),
  });

  return (
    <section className="flex flex-col p-4 gap-4">
      <section className="flex flex-col md:flex-row gap-2">
        <input value={searchData} onChange={(e) => setSearchData(e.target.value)} className="bg-gray-200 p-2 rounded-full outline-none w-full" placeholder="Search for users" type="text"/>
        <button onClick={() => searchUsers.mutate()} className="bg-blue-400 hover:bg-blue-500 text-center hover:cursor-pointer text-white rounded-full py-2 px-4">Search</button>
      </section>
      <section>
        {!searchUsers.isSuccess ? (
          <p>No results yet.</p>
        ) : (
          <section className="flex flex-col gap-4">
            <p className="font-semibold">Profiles</p>
            {searchUsers.data.results.map((user:any, index:any) => (
              <Link href={"/app/profile/" + user.id } key={ index } className="flex items-center gap-4">
                <img src={user.image} className="w-8 h-8 rounded-full" />
                <p className="textl-lg">{user.name}</p>
              </Link>
            ))}
          </section>
        )}
      </section>
    </section>
  )
};
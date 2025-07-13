"use client";
import api from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function Search() {

  const [ searchData, setSearchData ] = useState("");

  const searchUsers = useMutation({
    mutationFn: () => api.searchUsers({content: searchData}),
  });

  return (
    <section className="flex flex-col p-4 gap-4">
      <section className="flex gap-2">
        <input value={searchData} onChange={(e) => setSearchData(e.target.value)} className="bg-gray-200 p-2 rounded-full outline-none w-full" placeholder="Search for users" type="text"/>
        <button onClick={() => searchUsers.mutate()} className="bg-blue-400 hover:bg-blue-500 text-center hover:cursor-pointer text-white rounded-full py-2 px-4">Search</button>
      </section>
      <section>
        {!searchUsers.isSuccess ? (
          <p>No results yet.</p>
        ) : (
          <>
            {searchUsers.data.results.map((user:any, index:any) => (
              <section key={index}>
                {user.name}
              </section>
            ))}
          </>
        )}
      </section>

    </section>
  )
};
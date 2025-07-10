import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import api from "@/lib/axios";

export default function Post({ post }: any) {

  const queryClient = useQueryClient();

  const likePost = useMutation({
    mutationFn: () => api.likePost(post.id as string),
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return (
    <section className="flex flex-col gap-2 border-b-2 border-gray-300">
      <section className="flex gap-2">
        <img src={post.user.image} className="w-14 h-14 rounded-full"/>
        <section className="flex flex-col">
          <h3 className="font-semibold text-lg">{post.user.name}</h3>
          <h4 className="text-sm text-gray-600">{post.user.email}</h4>
        </section>
      </section>
      <section className="px-4">
        <p>{post.content}</p>
      </section>
      <section className="flex justify-between items-center text-center mt-2">
        <Link href="#" className="w-full p-2 border-t-2 border-gray-300">4 Replies</Link>
        <button 
          onClick={() => likePost.mutate()} 
          className={post.likeStatus ?
            "text-blue-500 font-semibold w-full p-2 border-t-2 border-x-2 border-gray-300 hover:cursor-pointer"
            : "w-full p-2 border-t-2 border-x-2 border-gray-300 hover:cursor-pointer"
            }>
          {post.likes.length} Likes
        </button>
        <button className="w-full p-2 border-t-2 border-gray-300">Share</button>
      </section>
    </section> 
  );
}
"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { useParams } from "next/navigation";
import Post from "@/components/Post";

export default function PostPage() {

  const params = useParams();

  const post = useQuery({
    queryKey: ['post', params.postId],
    queryFn: () => api.getPost(params.postId as string)
  });

  return (
    <>
      {post.isSuccess ? (
        <Post post={post.data} />
      ):null}
    </>
  );
};
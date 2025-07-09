"use server";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthOptions } from "@/lib/auth";

export async function GET ( request:NextRequest, { params }: { params: Promise<{ postId: string }>}) {

  const authOptions = await getAuthOptions();
  const session = await getServerSession(authOptions);
  const postId = (await params).postId; // Turbopack incorrectly says to await `params`; it's not async

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  };

  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: { user: true },
  });

  if(!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 })
  }

  return NextResponse.json( post, { status: 200 });
};
"use server";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthOptions } from "@/lib/auth";

export async function GET ( request:NextRequest ) {
  
  const authOptions = await getAuthOptions();
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  };

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email ?? "" },
    include: { following: true }
  });

  if (!user) {
    return NextResponse.json({ message: "User could not be found" }, { status: 402 })
  };

  const followedIds = user.following.map(user => user.followedId);
  followedIds.push(user.id);

  const followedPosts = await prisma.post.findMany({
    where: {
      userId: {
        in: followedIds,
      },
    },
    include: {
      user: true
    },
    orderBy: {
      created_at: 'desc',
    },
  });

  return NextResponse.json(followedPosts, { status: 200 });
};

export async function Post ( request:NextRequest ) {
  return NextResponse.json({ message: "Not a valid API route."}, {status: 403})
}
"use server";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthOptions } from "@/lib/auth";

export async function GET ( request: NextRequest, { params }: { params: { userId: string }}) {

  const authOptions = await getAuthOptions();
  const session = await getServerSession(authOptions);
  const userId = params.userId; // Turbopack incorrectly says to await `params`; it's not async

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  };

  const user = await prisma.user.findUnique({
    where: { id: userId}
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const posts = await prisma.post.findMany({
    where: { userId: userId },
    include: { user: true },
    orderBy: {
      created_at: 'desc'
    },
  });
  
  return NextResponse.json( posts, { status: 200 });
};

// Only exists to avoid problems with nextJS REST API structure
export async function POST ( request:NextRequest ) {
  return NextResponse.json({ message: "Not a valid API route"}, {status: 403})
}
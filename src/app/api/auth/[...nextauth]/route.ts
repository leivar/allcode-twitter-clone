import NextAuth from "next-auth";
import { getAuthOptions } from "@/lib/auth";

export const GET = async (...args: Parameters<typeof NextAuth>) => {
  const options = await getAuthOptions();
  return NextAuth(options)(...args);
};

// Exported POST does not serve a purpose besides avoiding errors with nextJS. Got error 405 without, and got errors if it was not async. 
export const POST = async (...args: Parameters<typeof NextAuth>) => {
  const options = await getAuthOptions();
  return NextAuth(options)(...args);
};
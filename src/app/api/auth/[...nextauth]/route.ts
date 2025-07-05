import NextAuth from "next-auth";
import { getAuthOptions } from "@/lib/auth";

export const GET = async (...args: Parameters<typeof NextAuth>) => {
  const options = await getAuthOptions();
  return NextAuth(options)(...args);
};
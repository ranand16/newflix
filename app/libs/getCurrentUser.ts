import { authOption } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import client from "./prismaDb";

export async function getSession() {
  return await getServerSession(authOption);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      throw new Error("You are not signed in!");
    }
    const curtrentUser = await client.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (!curtrentUser) {
      throw new Error("You are not signed in!");
    }
    return curtrentUser;
  } catch (e) {
    console.error(e);
    return null;
  }
}

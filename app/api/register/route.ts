import client from "@/app/libs/prismaDb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, username, password } = body;
  const existingUser = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    return NextResponse.json({ error: "Email taken already!" });
  }
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await client.user.create({
    data: { email, name: username, hashedPassword, image: "" },
  });
  return NextResponse.json(user);
}

import getCurrentUser from "@/app/libs/getCurrentUser";
import client from "@/app/libs/prismaDb";
import { NextResponse } from "next/server";

export async function GET() {
  const randomMovies = await client.movie.findMany();
  return NextResponse.json(randomMovies);
}

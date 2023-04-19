import client from "@/app/libs/prismaDb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const movieCount = await client.movie.count();
  const randomIndex = Math.floor(Math.random() * movieCount);

  const randomMovies = await client.movie.findMany({
    take: 1,
    skip: randomIndex,
  });

  return NextResponse.json(randomMovies[0]);
}

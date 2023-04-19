import getCurrentUser from "@/app/libs/getCurrentUser";
import client from "@/app/libs/prismaDb";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { movieId } = request.query;
  if (!movieId || typeof movieId != "string")
    throw new Error("Invalid movie id!");

  const movie = await client.movie.findUnique({
    where: {
      id: movieId,
    },
  });

  if (!movie) throw new Error("Invalid movie id!");

  return NextResponse.json(movie);
}

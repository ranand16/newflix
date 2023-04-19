import getCurrentUser from "@/app/libs/getCurrentUser";
import client from "@/app/libs/prismaDb";
import { NextResponse } from "next/server";

interface Params {
  movieid?: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { movieid: movieId } = params;
  console.log("🚀 ~ file: route.tsx:17 ~ GET ~ params:", params);
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

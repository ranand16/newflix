import getCurrentUser from "@/app/libs/getCurrentUser";
import client from "@/app/libs/prismaDb";
import { NextResponse } from "next/server";
import { without } from "lodash";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();
  const { movieId } = body;
  const selectedMovie = await client.movie.findUnique({
    where: {
      id: movieId,
    },
  });
  if (!selectedMovie) throw new Error("Movie doesnot exist!");

  const user = await client.user.update({
    where: {
      email: currentUser?.email || "",
    },
    data: {
      favoriteIds: {
        push: movieId,
      },
    },
  });

  return NextResponse.json(user);
}

export async function GET() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const favoriteMovies = await client.movie.findMany({
    where: {
      id: {
        in: currentUser?.favoriteIds,
      },
    },
  });
  return NextResponse.json(favoriteMovies);
}

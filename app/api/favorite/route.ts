import getCurrentUser from "@/app/libs/getCurrentUser";
import client from "@/app/libs/prismaDb";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { without } from "lodash";

export async function POST(request: Request) {
  const session = await getSession();

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
      email: session?.user?.email,
    },
    data: {
      favoriteIds: {
        push: movieId,
      },
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(request: Request) {
  const currentUser = await getCurrentUser();

  const body = await request.json();
  const { movieId } = body;
  const selectedMovie = await client.movie.findUnique({
    where: {
      id: movieId,
    },
  });
  if (!selectedMovie) throw new Error("Movie doesnot exist!");

  const updatedFavIdList = without(currentUser.favoriteIds, movieId);

  const user = await client.user.update({
    where: {
      email: currentUser.email,
    },
    data: {
      favoriteIds: updatedFavIdList,
    },
  });

  return NextResponse.json(user);
}

export async function GET(request: Request) {
  const currentUser = await getCurrentUser();

  const favoriteMovies = await client.movie.findMany({
    where: {
      id: {
        in: currentUser.favoriteIds,
      },
    },
  });
  return NextResponse.json(favoriteMovies);
}
 
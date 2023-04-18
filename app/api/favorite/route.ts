import getCurrentUser from "@/app/libs/getCurrentUser";
import client from "@/app/libs/prismaDb";
import { NextResponse } from "next/server";
import { without } from "lodash";

export async function POST(request: Request) {
  const curruser = await getCurrentUser();

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
      email: curruser?.email || "",
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
  console.log("🚀 ~ file: route.ts:34 ~ DELETE ~ currentUser:", currentUser);

  const body = await request.json();
  const { movieId } = body;
  console.log("🚀 ~ file: route.ts:38 ~ DELETE ~ movieId:", movieId);
  const selectedMovie = await client.movie.findUnique({
    where: {
      id: movieId,
    },
  });
  if (!selectedMovie) throw new Error("Movie doesnot exist!");

  const updatedFavIdList = without(currentUser?.favoriteIds, movieId);
  console.log(
    "🚀 ~ file: route.ts:47 ~ DELETE ~ updatedFavIdList:",
    updatedFavIdList
  );

  const user = await client.user.update({
    where: {
      email: currentUser?.email || "",
    },
    data: {
      favoriteIds: updatedFavIdList,
    },
  });
  console.log("🚀 ~ file: route.ts:57 ~ DELETE ~ user:", user);

  return NextResponse.json(user);
}

export async function GET() {
  const currentUser = await getCurrentUser();
  console.log("🚀 ~ file: route.ts:61 ~ GET ~ currentUser:", currentUser);

  const favoriteMovies = await client.movie.findMany({
    where: {
      id: {
        in: currentUser?.favoriteIds,
      },
    },
  });
  console.log("🚀 ~ file: route.ts:69 ~ GET ~ favoriteMovies:", favoriteMovies);
  return NextResponse.json(favoriteMovies);
}

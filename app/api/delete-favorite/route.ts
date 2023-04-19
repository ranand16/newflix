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

  const updatedFavIdList = without(currentUser?.favoriteIds, movieId);

  const user = await client.user.update({
    where: {
      email: currentUser?.email || "",
    },
    data: {
      favoriteIds: updatedFavIdList,
    },
  });

  return NextResponse.json(user);
}

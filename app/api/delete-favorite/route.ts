import getCurrentUser from "@/app/libs/getCurrentUser";
import client from "@/app/libs/prismaDb";
import { NextResponse } from "next/server";
import { without } from "lodash";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  console.log("🚀 ~ file: route.ts:34 ~ DELETE ~ currentUser:", currentUser);

  const body = await request.json();
  console.log("🚀 ~ file: route.ts:38 ~ DELETE ~ body:", body);
  const { movieId } = body;
  console.log("🚀 ~ file: route.ts:38 ~ DELETE ~ movieId:", movieId);
  const selectedMovie = await client.movie.findUnique({
    where: {
      id: movieId,
    },
  });
  console.log(
    "🚀 ~ file: route.ts:46 ~ DELETE ~ selectedMovie:",
    selectedMovie
  );
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

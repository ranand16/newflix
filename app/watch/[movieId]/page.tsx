import ClientOnly from "@/app/components/ClientComponentOnly";
import WatchMovie from "@/app/components/WatchMovie";
import axios from "axios";
import React from "react";
interface WatchMovieParams {
  movieId?: string;
}
const Watch = async ({ params }: { params: WatchMovieParams }) => {
  const { movieId } = params;

  return (
    <ClientOnly>
      <WatchMovie movieId={movieId} />
    </ClientOnly>
  );
};

export default Watch;

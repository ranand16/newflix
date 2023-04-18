"use client";

import React from "react";
import useFavorites from "../hooks/useFavorites";
import useMovies from "../hooks/useMovies";
import MovieList from "./MovieList";

export const MovieLists: React.FC = () => {
  const { favData } = useFavorites();
  const { moviesData } = useMovies();
  return (
    <>
      <MovieList title={"Trending Now"} movies={moviesData} />
      <MovieList
        title={"My List"}
        movies={favData}
        // error={favError}
        // loading={favIsLoading}
      />
    </>
  );
};

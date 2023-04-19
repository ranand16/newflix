"use client";
import React from "react";
import useMovie from "../hooks/useMovie";

interface WatchMovieParams {
  movieId?: string;
}

const WatchMovie: React.FC<WatchMovieParams> = ({ movieId }) => {
  const { movieData } = useMovie(movieId);
  console.log("🚀 ~ file: page.tsx:12 ~ movieData:", movieData);
  return <div>WatchMovie</div>;
};

export default WatchMovie;

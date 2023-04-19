"use client";
import React from "react";
import useMovie from "../hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface WatchMovieParams {
  movieId?: string;
}

const WatchMovie: React.FC<WatchMovieParams> = ({ movieId }) => {
  const { movieData } = useMovie(movieId);
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft className={"text-white"} size={40} />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className=" font-light">Watching:</span>
          {movieData.title}
        </p>
      </nav>
      <video
        className="h-full w-full"
        src={movieData.videoUrl}
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default WatchMovie;

"use client";

import { MovieItem } from "./MovieItem";
import { Movie } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
interface MovieListProps {
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ title }) => {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  useEffect(() => {
    const billboard = async () => {
      try {
        const { data, status } = await axios.get("/api/movies");
        setMovies(data);
      } catch (e) {}
    };
    billboard();
  }, []);

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {movies?.map((movie, i) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

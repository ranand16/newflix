"use client";

import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { MovieInterface } from "../types";
import useInfoModal from "../hooks/useInfoModalStore";

interface MovieItemProps {
  movie: MovieInterface;
}

export const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const router = useRouter();
  const { onOpen } = useInfoModal();
  return (
    <div
      key={movie.id}
      className="group bg-zinc-900 col-span relative h-[12vw]"
    >
      <img
        className={
          "cursor-pointer object-cover transition duration shadow-xl rounded-md  group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
        }
        src={movie["thumbnailUrl"]}
        alt={movie["title"]}
      />
      <div className="opacity-0 absolute top-0 transition duration-150 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[3vw] group-hover:translate-x-[1vw] group-hover:opacity-100">
        <img
          className={
            "cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          }
          src={movie["thumbnailUrl"]}
          alt={movie["title"]}
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => {
                router.push(`/watch/${movie.id}`);
              }}
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={movie.id} />
            <div
              className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
              onClick={() => onOpen(movie?.id)}
            >
              <BiChevronDown
                size={30}
                className="text-white group-hover/item:text-neutral-300"
              />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">
              {movie.duration}
            </p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{movie.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

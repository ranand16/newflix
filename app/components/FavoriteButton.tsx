"use client";
import React, { useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import useFavorites from "../hooks/useFavorites";
import useCurrentUser from "../hooks/useCurrentUser";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { favMutate } = useFavorites();
  const { currentUserData, currentUserMutate } = useCurrentUser();

  const isFav = useMemo(() => {
    const list = currentUserData?.favoriteIds || [];
    return list.includes(movieId);
  }, [currentUserData, movieId]);

  const toggleFav = useCallback(async () => {
    let response;
    if (isFav) response = await axios.post("/api/delete-favorite", { movieId });
    else response = await axios.post("/api/favorite", { movieId });

    const updatedMovieIds = response?.data?.favoriteIds;

    currentUserMutate({
      ...currentUserData,
      favoriteIds: updatedMovieIds,
    });
    favMutate();
  }, [isFav, movieId, currentUserData, favMutate, currentUserMutate]);

  const Icon = isFav ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
      onClick={toggleFav}
    >
      <Icon className="text-white" size={25} />
    </div>
  );
};

export default FavoriteButton;

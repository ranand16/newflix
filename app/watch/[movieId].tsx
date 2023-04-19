"use client";

import React from "react";
import { useRouter } from "next/router";
import useMovie from "../hooks/useMovie";

const Watch = async () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { movieData } = useMovie(movieId as string);

  return <div className="flex items-center"></div>;
};

export default Watch;

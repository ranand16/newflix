"use client";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayBtn from "./PlayBtn";
import useInfoModal from "../hooks/useInfoModalStore";

const Billboard = () => {
  const [billboard, setBillboard] = useState({
    thumbnailUrl: "",
    videoUrl: "",
    title: "",
    description: "",
    id: "",
  });

  useEffect(() => {
    const billboard = async () => {
      try {
        const { data, status } = await axios.get("/api/random");
        setBillboard(data);
      } catch (e) {}
    };
    billboard();
  }, []);

  const { onOpen } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    onOpen(billboard?.id);
  }, [billboard, onOpen]);
  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-75"
        poster={billboard["thumbnailUrl"]}
        src={billboard["videoUrl"]}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {billboard["title"]}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {billboard["description"]}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayBtn movieId={billboard["id"]} />
          <button
            className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
            onClick={handleOpenModal}
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;

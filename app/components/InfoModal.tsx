"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayBtn from "./PlayBtn";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "../hooks/useInfoModalStore";
import useMovie from "../hooks/useMovie";

interface InfoModalProps {
  visible?: boolean;
  onClose?: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ onClose, visible }) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  const { movieData } = useMovie(movieId);
  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleCLose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) return null;
  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96 ">
            <video
              autoPlay
              muted
              loop
              className="w-full brightness-75 object-cover h-full"
              src={movieData?.videoUrl}
              poster={movieData?.thumbnailUrl}
            ></video>
            <div
              onClick={handleCLose}
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {movieData?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <PlayBtn movieId={movieData?.id} />
                <FavoriteButton movieId={movieData?.id} />
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <div className="flex flex-row items-center gap-2 mb-8">
              <p className="text-green-400 font-semibold text-lg">New</p>
              <p className="text-white text-lg">{movieData?.duration}</p>
              <p className="text-white text-lg">{movieData?.genre}</p>
            </div>
            <p className="text-white text-lg">{movieData?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
"use client";

import React from "react";
import TextControl from "../components/TextControl";
import useCurrentUser from "../hooks/useCurrentUser";

const Profiles = async () => {
  const { currentUserData } = useCurrentUser();

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <TextControl
          type={"h1"}
          classNames={"text-3xl md:text-6xl text-white text-center"}
        >
          Who is watching?
        </TextControl>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div className="group flex-row w-44 mx-auto">
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
              <img src={"/images/default-blue.png"} alt="me" />
            </div>
            <TextControl classNames="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
              ~{currentUserData?.name}
            </TextControl>
          </div>
          <div className="group flex-row w-44 mx-auto">
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
              <img src={"/images/default-green.png"} alt="me" />
            </div>
            <TextControl classNames="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
              {currentUserData?.name}
            </TextControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import Input from "../components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  return (
    <div className="realtive h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-fixed">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src={"/images/logo.png"}
            alt="Newflix"
            className="h-12 w-10"
            width={12}
            height={12}
          />
        </nav>
        <div className=" flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
            <div className="flex flex-col gap-4">
              <Input
                id="sign-name"
                value={username}
                label="Username"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
              <Input
                id="sign-email"
                value={email}
                label="Email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

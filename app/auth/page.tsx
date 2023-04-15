"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import Input from "../components/Input";

const LOGIN_VARIANTS = ["LOGIN", "SIGNUP"];

const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const [variant, setvariant] = useState(LOGIN_VARIANTS[0]);

  const toggleVariant = useCallback(() => {
    setvariant((curr) =>
      curr === LOGIN_VARIANTS[0] ? LOGIN_VARIANTS[1] : LOGIN_VARIANTS[0]
    );
  }, []);

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
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === LOGIN_VARIANTS[0] ? "Sign in" : "Create an account"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === LOGIN_VARIANTS[1] && (
                <Input
                  id="sign-name"
                  value={username}
                  label="Username"
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                />
              )}
              <Input
                id="sign-email"
                value={email}
                label="Email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <Input
                id="sign-password"
                value={password}
                label="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === LOGIN_VARIANTS[0] ? "Login" : "Sign up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === LOGIN_VARIANTS[0]
                ? "First time using newflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="tex-white ml-1 hover:underline cursor-pointer"
              >
                {variant === LOGIN_VARIANTS[0]
                  ? "Create an account"
                  : "Sign in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

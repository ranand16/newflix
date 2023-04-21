"use client";

import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";

import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import useMobileMenu from "../../hooks/useMobileMenu";
import Mobilemenu from "../MobileMenu";
import AccountMenu from "../AccountMenu";
import useAccountMenu from "../../hooks/useAccountMenu";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/navigation";
import TextControl from "../TextControl";
import { NAV_ITEMS } from "@/app/utils/constants";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const mobileMenu = useMobileMenu();
  const accountMenu = useAccountMenu();
  const [bg, setBg] = useState(false);
  const router = useRouter();
  const { currentUserData } = useCurrentUser();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="fixed w-full z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          bg ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img
          className="h-4 lg:h-7"
          src={"/images/logo.png"}
          alt="new flix logo"
        />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavbarItem key={item} label={item} />
          ))}
        </div>
        <div
          onClick={() => {
            mobileMenu.isOpen ? mobileMenu.onClose() : mobileMenu.onOpen();
          }}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <TextControl classNames="text-white text-sm" type="p">
            Browse
          </TextControl>
          <BsChevronDown
            className={`text-white transition ${
              mobileMenu.isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          <Mobilemenu visible={mobileMenu.isOpen} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          {currentUserData ? (
            <div
              className="flex flex-row items-center gap-2 cursor-pointer relative"
              onClick={() => {
                accountMenu.isOpen
                  ? accountMenu.onClose()
                  : accountMenu.onOpen();
              }}
            >
              <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                <img src="/images/default-blue.png" alt="default image" />
              </div>
              <BsChevronDown
                className={`text-white transition ${
                  accountMenu.isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
              <AccountMenu
                visible={accountMenu.isOpen}
                currentUserData={currentUserData}
              />
            </div>
          ) : (
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
              <AiOutlineUser
                onClick={() => {
                  router.push("/auth");
                }}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

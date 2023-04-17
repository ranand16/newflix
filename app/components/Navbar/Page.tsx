"use client";

import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";

import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import useMobileMenu from "../../hooks/useMobileMenu";
import Mobilemenu from "../MobileMenu";
import AccountMenu from "../AccountMenu";
import useAccountMenu from "../../hooks/useAccountMenu";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const mobileMenu = useMobileMenu();
  const accountMenu = useAccountMenu();
  const [bg, setBg] = useState(false);

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
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          onClick={() => {
            mobileMenu.isOpen ? mobileMenu.onClose() : mobileMenu.onOpen();
          }}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
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
          <div
            className="flex flex-row items-center gap-2 cursor-pointer relative"
            onClick={() => {
              accountMenu.isOpen ? accountMenu.onClose() : accountMenu.onOpen();
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
            <AccountMenu visible={accountMenu.isOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

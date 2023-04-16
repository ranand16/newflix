import { Inter } from "next/font/google";
import { User } from "@prisma/client";

export default function Home() {
  interface NavbarProps {
    currentUser?: User | null;
  }
  return <main className="w-full h-full">Newflix</main>;
}

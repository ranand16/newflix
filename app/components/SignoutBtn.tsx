"use client";

import { signOut } from "next-auth/react";
import React from "react";
export function SignoutBtn() {
  return (
    <button
      className="h-10 w-full bg-white"
      onClick={() => {
        signOut();
      }}
    >
      Sign out
    </button>
  );
}

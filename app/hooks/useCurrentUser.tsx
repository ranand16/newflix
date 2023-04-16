"use client";

import { create } from "zustand";

interface CurrentUserStore {
  currentUser: any;
  setCurrentUser: (currentUser: any) => void;
}

const useCurrentUser = create<CurrentUserStore>((set) => ({
  currentUser: false,
  setCurrentUser: (currentUser) => set({ currentUser }),
}));

export default useCurrentUser;

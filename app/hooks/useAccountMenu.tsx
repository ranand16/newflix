"use client";
import { create } from "zustand";

interface ToggleAccountMenuStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAccountMenu = create<ToggleAccountMenuStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAccountMenu;

"use client";
import { create } from "zustand";

interface ToggleMobileMenuStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMobileMenu = create<ToggleMobileMenuStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useMobileMenu;

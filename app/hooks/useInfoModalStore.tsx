"use client";
import { create } from "zustand";

interface InfoModalStore {
  movieId?: string | undefined;
  isOpen: boolean;
  onOpen: (movieId: string) => void;
  onClose: () => void;
}

const useInfoModal = create<InfoModalStore>((set) => ({
  movieId: undefined,
  isOpen: false,
  onOpen: (movieId: string) => set({ isOpen: true, movieId }),
  onClose: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;

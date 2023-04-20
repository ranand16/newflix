"use client";

import React from "react";
import InfoModal from "./InfoModal";
import useInfoModal from "../hooks/useInfoModalStore";

const ModalContainer = () => {
  const { isOpen, onClose } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={onClose} />
    </>
  );
};

export default ModalContainer;

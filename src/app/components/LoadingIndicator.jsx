import React from "react";
import { Modal, ModalContent } from "@nextui-org/react";
const LoadingIndicator = ({ isOpen, onOpenChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      hideCloseButton
    >
      <ModalContent className="grid place-items-center w-auto p-4">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </ModalContent>
    </Modal>
  );
};

export default LoadingIndicator;

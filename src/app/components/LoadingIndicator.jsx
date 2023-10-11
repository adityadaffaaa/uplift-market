import React from "react";
import { Modal, ModalContent } from "@nextui-org/react";
export const LoadingIndicator = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      placement="center"
      hideCloseButton
    >
      <ModalContent className="grid place-items-center w-auto p-4">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </ModalContent>
    </Modal>
  );
};

export default LoadingIndicator;

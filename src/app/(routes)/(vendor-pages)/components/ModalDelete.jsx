import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export const ModalDelete = ({ isOpen, onOpenChange }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        hideCloseButton
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
      >
        <ModalContent className="p-2">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1">
                <img
                  src={"/assets/images/deletePopUp.png"}
                  alt="delete"
                  className="h-14 rounded-full object-cover items-center"
                />
              </ModalHeader>
              <ModalBody className="flex flex-col items-center">
                <h6 className="text-paragraph1Res lg:text-paragraph6 text-center">
                  Apakah kamu yakin ingin menghapus?
                </h6>
                <p className="text-paragraph6Res lg:text-paragraph8 text-center">
                  Dengan klik hapus kamu tidak bisa
                  mengembalikannya lagi.
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button
                  color="default"
                  variant="bordered"
                  onPress={onClose}
                  radius="sm"
                >
                  Batal
                </Button>
                <Button
                  color="danger"
                  variant="solid"
                  onPress={onClose}
                  radius="sm"
                >
                  Hapus
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDelete;

"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { NextButton } from ".";
import Image from "next/image";

export const PopUpDialog = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        backdrop="blur"
        placement="center"
        size="lg"
        hideCloseButton
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent className="p-7 flex flex-col items-center gap-3">
          <ModalHeader className="flex flex-col items-center gap-1 p-0 m-0">
            <Image
              width={96}
              height={96}
              src={"/assets/images/img-handshake.png"}
            />
            <h4 className="text-paragraph4Res lg:text-paragraph6">
              Selesaikan pesanan ini?
            </h4>
          </ModalHeader>
          <ModalBody className="m-0 p-0">
            <p className="text-paragraph6Res lg:text-paragraph8 text-center text-neutral-500">
              Dengan klik selesai, dana akan diteruskan ke
              penjual dan kamu tidak dapat mengajukan
              komplain.
            </p>
          </ModalBody>
          <ModalFooter className="p-0 m-0">
            <NextButton color={"primary"} onPress={onClose}>
              Selesaikan
            </NextButton>
            <NextButton
              variant={"bordered"}
              color={"primary"}
              onPress={onClose}
            >
              Batal
            </NextButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopUpDialog;

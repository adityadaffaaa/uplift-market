"use client";

import React from "react";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
} from "@nextui-org/react";
import icons from "@/app/utils/icons";

const { DeleteIcon } =
  icons.vendorDashboard.addProductVendor;

const AddProductModal = ({
  isOpen,
  onOpenChange,
  onAction = () => {},
  isAllImage,
  isConfirm,
}) => {
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      backdrop="blur"
      placement="center"
      onOpenChange={onOpenChange}
      hideCloseButton
    >
      <ModalContent>
        {(onClose) =>
          isConfirm ? (
            <AddProductConfirm
              onAction={onAction}
              onClose={onClose}
            />
          ) : (
            <DeleteImage
              isAllImage={isAllImage}
              onAction={onAction}
              onClose={onClose}
            />
          )
        }
      </ModalContent>
    </Modal>
  );
};

const DeleteImage = ({
  isAllImage,
  onAction = () => {},
  onClose,
}) => {
  return (
    <>
      <ModalHeader className="flex justify-center">
        <div className="rounded-full p-4 bg-danger-50">
          <DeleteIcon
            className={"text-danger-500 text-[20px]"}
          />
        </div>
      </ModalHeader>
      <ModalBody>
        <p className="text-paragraph6 text-center">
          {isAllImage
            ? "Anda yakin ingin menghapus semua foto?"
            : "Anda yakin ingin menghapus foto ini?"}
        </p>
      </ModalBody>
      <ModalFooter className="">
        <div className="flex gap-2">
          <Button
            radius="sm"
            color="default"
            variant="bordered"
            onPress={onClose}
          >
            Batal
          </Button>
          <Button
            type="button"
            radius="sm"
            color="danger"
            variant="solid"
            onPress={() => {
              onAction();
              onClose();
            }}
          >
            Hapus
          </Button>
        </div>
      </ModalFooter>
    </>
  );
};

const AddProductConfirm = ({
  onAction = () => {},
  onClose,
}) => {
  return (
    <>
      <ModalHeader className="flex justify-center">
        <div className="rounded-full p-4 bg-danger-50">
          <DeleteIcon
            className={"text-danger-500 text-[20px]"}
          />
        </div>
      </ModalHeader>
      <ModalBody>
        <p className="text-paragraph6 text-center">
          Sudah yakin menambah produk?
        </p>
      </ModalBody>
      <ModalFooter className="">
        <div className="flex gap-2">
          <Button
            radius="sm"
            color="default"
            variant="bordered"
            onPress={onClose}
          >
            Batal
          </Button>
          <Button
            type="submit"
            radius="sm"
            color="primary"
            variant="solid"
            onPress={() => {
              onAction();
              onClose();
            }}
          >
            Tambah
          </Button>
        </div>
      </ModalFooter>
    </>
  );
};

export default AddProductModal;

"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { AiOutlineSave } from "react-icons/ai";

type ModalUIProps = {
  title: string;
  isOpen: boolean;
  children?: React.ReactNode;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
  onClose: () => void;
};

export default function ModalUI({
  title,
  isOpen,
  onClose,
  children,
  size = "xl",
}: ModalUIProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} size={size}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={onClose}>
            Save <AiOutlineSave />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

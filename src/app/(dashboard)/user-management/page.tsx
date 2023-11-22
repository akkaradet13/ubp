"use client";

import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import ButtonUI from "@/ui/ButtonUI";
import InputFieldUI from "@/ui/InputFieldUI";
import ModalUI from "@/ui/ModalUI";
import { LuLogIn, LuEye, LuEyeOff } from "react-icons/lu";
import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";
import PaginationComponent from "@/components/PaginationComponent";

type Props = {};

const columns = [
  {
    key: "fullName",
    label: "ชื่อ - นามสกุล",
  },
  {
    key: "userName",
    label: "Username",
  },
  {
    key: "role",
    label: "ตำแหน่ง",
  },
  {
    key: "createDate",
    label: "วันที่สร้าง",
  },
  {
    key: "action",
    label: "Action",
  },
];

const rows = [
  {
    fullName: "John Doe",
    userName: "johndoe123",
    role: "Manager",
    createDate: "2023-11-15",
    action: "Edit",
  },
  {
    fullName: "Jane Smith",
    userName: "janesmith456",
    role: "Developer",
    createDate: "2023-11-14",
    action: "Edit",
  },
  {
    fullName: "Alice Johnson",
    userName: "alicej",
    role: "Designer",
    createDate: "2023-11-13",
    action: "Edit",
  },
  {
    fullName: "Bob Wilson",
    userName: "bobw",
    role: "Analyst",
    createDate: "2023-11-12",
    action: "Edit",
  },
  {
    fullName: "Ella Davis",
    userName: "ellad",
    role: "Manager",
    createDate: "2023-11-11",
    action: "Edit",
  },
  {
    fullName: "David Lee",
    userName: "davidl",
    role: "Developer",
    createDate: "2023-11-10",
    action: "Edit",
  },
  {
    fullName: "Grace Miller",
    userName: "gracem",
    role: "Designer",
    createDate: "2023-11-09",
    action: "Edit",
  },
  {
    fullName: "Michael Brown",
    userName: "michaelb",
    role: "Analyst",
    createDate: "2023-11-08",
    action: "Edit",
  },
];

export default function Page({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="mx-6 p-4 lg:mx-12">
      <BreadcrumbComponent />
      <ModalUI
        title="เพิ่มข้อมูลวัตถุดิบ"
        isOpen={isOpen}
        onClose={onOpenChange}
      >
        <main className="grid grid-cols-2 gap-5">
          <div className="w-full lg:w-auto col">
            <InputFieldUI label="ชื่อ" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto">
            <InputFieldUI label="นามสกุล" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto col-span-2">
            <InputFieldUI label="Username" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto col-span-2">
            <InputFieldUI
              onValueChange={(e) => setPassword(e)}
              label="password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <LuEyeOff className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <LuEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>
          <div className="w-full lg:w-auto col-span-2">
            <InputFieldUI label="ตำแหน่ง" isRequired isClearable />
          </div>
        </main>
      </ModalUI>
      <div className="flex flex-col w-full lg:flex-row justify-between items-center mt-10">
        <div className="flex items-center lg:w-auto">
          <h1 className="text-4xl font-bold">จัดการผู้ใช้งาน</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 mt-4 lg:mt-0">
          <div className="w-full lg:w-auto">
            <InputFieldUI
              isClearable
              placeholder="ค้นหา"
              startContent={<AiOutlineSearch />}
              size="sm"
            />
          </div>
          <div className="w-full lg:w-auto">
            <ButtonUI
              size="lg"
              type="button"
              variant="solid"
              color="primary"
              endContent={<AiOutlineUserAdd />}
              onPress={onOpen}
            >
              เพิ่มผู้ใช้งาน
            </ButtonUI>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {rows.map((row: object, index: number) => (
              <TableRow key={index}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(row, columnKey)}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex w-full justify-end my-4">
          <PaginationComponent total={100} initialPage={1} />
        </div>
      </div>
    </div>
  );
}

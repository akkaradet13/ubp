"use client";

import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import ButtonUI from "@/ui/ButtonUI";
import InputFieldUI from "@/ui/InputFieldUI";
import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiFillFileAdd,
} from "react-icons/ai";
import { useDisclosure } from "@nextui-org/react";
import ModalUI from "@/ui/ModalUI";
import InputFieldDatePickerUI from "@/ui/InputFieldDatePickerUI";
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import PaginationComponent from "@/components/PaginationComponent";

type User = {
  serialNumber: string;
  supplierName: string;
  supplierGroup: string;
  supplierType: string;
  country: string;
  taxId: string;
  action: string;
};

type Props = {};

const columns = [
  {
    key: "rawMaterialName",
    label: "Raw Material Name",
  },
  {
    key: "qty",
    label: "Qty to Menufacture",
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
    rawMaterialName: "น้ำกากส่า",
    qty: 100,
    createDate: "2023-11-15",
    action: "",
  },
  {
    rawMaterialName: "มันสำปะหลัง",
    qty: 1,
    createDate: "2023-11-14",
    action: "",
  },
  {
    rawMaterialName: "กากมันสำปะหลัง",
    qty: 4,
    createDate: "2023-11-13",
    action: "",
  },
  {
    rawMaterialName: "กากน้ำตาล (Molasses)",
    qty: 8,
    createDate: "2023-11-12",
    action: "",
  },
  {
    rawMaterialName: "น้ำเสียต่าง ๆ",
    qty: 2,
    createDate: "2023-11-11",
    action: "Edit",
  },
];

export default function RawMaterialsPage({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "action":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="See Detail">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => handleSeeDetail(user)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Update">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => handleUpdate(user)}
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleDelete(user)}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const handleSeeDetail = (user: User) => {
    // Implement the logic to see details here
    console.log("See Detail clicked for user:", user);
  };

  const handleUpdate = (user: User) => {
    // Implement the logic to update here
    console.log("Update clicked for user:", user);
  };

  const handleDelete = (user: User) => {
    // Implement the logic to delete here
    console.log("Delete clicked for user:", user);
  };
  return (
    <div className="mx-6 p-4 lg:mx-12">
      <BreadcrumbComponent />
      <ModalUI
        title="เพิ่มข้อมูลวัตถุดิบ"
        isOpen={isOpen}
        onClose={onOpenChange}
      >
        <main className="flex flex-col gap-5">
          <div className="w-full lg:w-auto">
            <InputFieldUI label="ชื่อวัตถุดิบ" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto">
            <InputFieldUI label="Qty to Menufacture" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto">
            <InputFieldDatePickerUI isDisabled />
          </div>
        </main>
      </ModalUI>
      <div className="flex flex-col w-full lg:flex-row justify-between items-center mt-10">
        <div className="flex items-center lg:w-auto">
          <h1 className="text-4xl font-bold">จัดการวัตถุดิบ</h1>
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
              endContent={<AiFillFileAdd />}
              onPress={onOpen}
            >
              เพิ่มวัตถุดิบ
            </ButtonUI>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Table aria-label="Supplier Table">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} className="text-md font-bold">
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows} emptyContent="No rows to display.">
            {rows.map((row: any, index: number) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {renderCell(row, column.key)}
                  </TableCell>
                ))}
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

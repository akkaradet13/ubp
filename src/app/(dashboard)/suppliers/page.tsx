"use client";

import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import ButtonUI from "@/ui/ButtonUI";
import InputFieldUI from "@/ui/InputFieldUI";
import {
  Chip,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
  getKeyValue,
} from "@nextui-org/react";
import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiFillFileAdd,
} from "react-icons/ai";
import { useDisclosure } from "@nextui-org/react";
import ModalUI from "@/ui/ModalUI";
import InputFieldDatePickerUI from "@/ui/InputFieldDatePickerUI";
import { AiOutlineDelete } from "react-icons/ai";
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import PaginationComponent from "@/components/PaginationComponent";

type Props = {};

type User = {
  serialNumber: string;
  supplierName: string;
  supplierGroup: string;
  supplierType: string;
  country: string;
  taxId: string;
  action: string;
};

const columns = [
  {
    key: "serialNumber",
    label: "Serial Number",
  },
  {
    key: "supplierName",
    label: "Supplier Name",
  },
  {
    key: "supplierGroup",
    label: "Supplier Group",
  },
  {
    key: "supplierType",
    label: "Supplier Type",
  },
  {
    key: "country",
    label: "Country",
  },
  {
    key: "taxId",
    label: "หมายเลขประจำตัวผู้เสียภาษี",
  },
  {
    key: "action",
    label: "Action",
  },
];

const rows: User[] = [
  {
    serialNumber: "12345",
    supplierName: "Supplier A",
    supplierGroup: "Group 1",
    supplierType: "Type X",
    country: "Country 1",
    taxId: "123-456-789",
    action: "Edit",
  },
  {
    serialNumber: "67890",
    supplierName: "Supplier B",
    supplierGroup: "Group 2",
    supplierType: "Type Y",
    country: "Country 2",
    taxId: "987-654-321",
    action: "Edit",
  },
  {
    serialNumber: "54321",
    supplierName: "Supplier C",
    supplierGroup: "Group 3",
    supplierType: "Type Z",
    country: "Country 3",
    taxId: "567-890-123",
    action: "Edit",
  },
];

export default function SupplierPage({}: Props) {
  const [supplierData, setSupplierData] = useState({
    serialNumber: "12345-67890",
    supplierName: "",
    supplierGroup: "",
    supplierType: "",
    country: "",
    taxId: "",
  });
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

  const handleChange = (field: string, value: any) => {
    setSupplierData({ ...supplierData, [field]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log("Form submitted with data:", supplierData);
  };

  return (
    <div className="mx-6 p-4 lg:mx-12">
      <BreadcrumbComponent />
      <ModalUI
        title="เพิ่มข้อมูล Supplier"
        isOpen={isOpen}
        onClose={onOpenChange}
      >
        <form onSubmit={handleSubmit}>
          <main className="grid gap-5">
            <div className="w-full lg:w-auto">
              <InputFieldUI
                label="ชื่อวัตถุดิบ"
                value={supplierData.supplierName}
                isRequired
                isClearable
                onValueChange={(value) => handleChange("supplierName", value)}
              />
            </div>

            <div className="w-full lg:w-auto">
              <InputFieldUI
                label="กลุ่ม Supplier"
                value={supplierData.supplierGroup}
                isRequired
                onValueChange={(value) => handleChange("supplierGroup", value)}
              />
            </div>

            <div className="w-full lg:w-auto">
              <InputFieldUI
                label="ประเภท Supplier"
                value={supplierData.supplierType}
                isRequired
                onValueChange={(value) => handleChange("supplierType", value)}
              />
            </div>

            <div className="w-full lg:w-auto">
              <InputFieldUI
                label="ประเทศ"
                value={supplierData.country}
                isRequired
                onValueChange={(value) => handleChange("country", value)}
              />
            </div>

            <div className="w-full lg:w-auto">
              <InputFieldUI
                label="หมายเลขประจำตัวผู้เสียภาษี"
                value={supplierData.taxId}
                isRequired
                onValueChange={(value) => handleChange("taxId", value)}
              />
            </div>
          </main>
        </form>
      </ModalUI>
      <div className="flex flex-col w-full lg:flex-row justify-between items-center mt-10">
        <div className="flex items-center lg:w-auto">
          <h1 className="text-4xl font-bold">จัดการข้อมูล Supplier</h1>
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
              เพิ่ม Supplier
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
            {rows.map((row: User, index: number) => (
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

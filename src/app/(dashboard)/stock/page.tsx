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
import { AiOutlineSearch, AiFillFileAdd } from "react-icons/ai";
import { useDisclosure } from "@nextui-org/react";
import ModalUI from "@/ui/ModalUI";
import InputFieldDatePickerUI from "@/ui/InputFieldDatePickerUI";
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import PaginationComponent from "@/components/PaginationComponent";

type Stock = {
  title: string;
  status: string;
  date: string;
  grandTotal: string;
  action: string;
};

type Props = {};

const columns = [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "grandTotal",
    label: "GrandTotal",
  },
  {
    key: "action",
    label: "Action",
  },
];

const rows: Stock[] = [
  {
    title: "บริษัท เอี่ยมศิริแป้งมัน จำกัด",
    status: "cancel",
    date: "2021-08-01",
    grandTotal: "100,000",
    action: "",
  },
  {
    title: "บริษัท สหกรณ์ อาหาร จำกัด",
    status: "To recive",
    date: "2021-08-01",
    grandTotal: "100,000",
    action: "",
  },
  {
    title: "บริษัท สหกรณ์ อาหาร จำกัด",
    status: "To recive",
    date: "2021-08-01",
    grandTotal: "100,000",
    action: "",
  },
  {
    title: "บริษัท สหกรณ์ อาหาร จำกัด",
    status: "cancel",
    date: "2021-08-01",
    grandTotal: "100,000",
    action: "",
  },
  {
    title: "บริษัท สหกรณ์ อาหาร จำกัด",
    status: "To recive",
    date: "2021-08-01",
    grandTotal: "100,000",
    action: "",
  },
  {
    title: "บริษัท สหกรณ์ อาหาร จำกัด",
    status: "To recive",
    date: "2021-08-01",
    grandTotal: "100,000",
    action: "",
  },
  {
    title: "บริษัท สหกรณ์ อาหาร จำกัด",
    status: "To recive",
    date: "2021-08-01",
    grandTotal: "100,000",
    action: "",
  },
  {
    title: "บริษัท สหกรณ์ อาหาร จำกัด",
    status: "To recive",
    date: "2021-08-01",
    grandTotal: "100,000",
    action: "",
  },
];

export default function StockPage({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const renderCell = React.useCallback((user: Stock, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof Stock];

    switch (columnKey) {
      case "status":
        return (
          <div className="flex items-center">
            <span
              className={`w-3 h-3 rounded-full mr-2 ${
                cellValue === "To recive" ? "bg-success" : "bg-danger"
              }`}
            ></span>
            {cellValue}
          </div>
        );
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

  const handleSeeDetail = (user: Stock) => {
    // Implement the logic to see details here
    console.log("See Detail clicked for user:", user);
  };

  const handleUpdate = (user: Stock) => {
    // Implement the logic to update here
    console.log("Update clicked for user:", user);
  };

  const handleDelete = (user: Stock) => {
    // Implement the logic to delete here
    console.log("Delete clicked for user:", user);
  };
  return (
    <div className="container mx-auto p-4 lg:mx-12">
      <BreadcrumbComponent />
      <ModalUI
        title="เพิ่มข้อมูลวัตถุดิบ"
        isOpen={isOpen}
        onClose={onOpenChange}
      >
        <main className="grid grid-cols-2 gap-5">
          <div className="w-full lg:w-auto col-span-2">
            <InputFieldUI label="บริษัท" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto">
            <InputFieldDatePickerUI />
          </div>
          <div className="w-full lg:w-auto">
            <InputFieldUI label="เวลา" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto ">
            <InputFieldUI label="ประเภทกาก" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto ">
            <InputFieldUI label="นำ้หนัก" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto ">
            <InputFieldUI label="ทะเบียนรถ" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto ">
            <InputFieldUI label="ราคา" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto ">
            <InputFieldUI label="เลขที่ใบเสร็จ" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto ">
            <InputFieldUI label="หมายเหตุ" isClearable />
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
        <Table
          aria-label="Supplier Table"
          classNames={{
            wrapper: "min-h-[222px]",
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} className="text-md font-bold">
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows} emptyContent="No rows to display.">
            {rows.map((row: Stock, index: number) => (
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

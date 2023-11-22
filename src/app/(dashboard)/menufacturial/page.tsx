"use client"
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import BaseTable from "@/components/TableComponent/bassTable";
import CardUI from "@/ui/CardUI";
import InputFieldUI from "@/ui/InputFieldUI";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const menufacturial = () => {
  return (
    <div className="mx-6 p-4 lg:mx-12">
      <div className="flex flex-col w-full lg:flex-row justify-between items-center mt-10">
        <div className="flex items-center lg:w-auto">
          <h1 className="text-4xl font-bold">ติดตามการหมัก</h1>
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
        </div>
      </div>
      <BreadcrumbComponent />

      <BaseTable classNames="p-4" />
    </div>
  );
};

export default menufacturial;

"use client"

import FermentationTable from '@/components/TableComponent/fermentationTable';
import CardUI from '@/ui/CardUI';
import React from 'react'

const matetial = () => {
    return (
      <div>
        <CardUI
          fullWidth
          classNames="bg-white m-4"
          bodyClassName="p-6 flex flex-col items-center justify-center"
        >
          <div className="text-start flex justify-between w-full text-xl font-semibold text-gray-800">
            <div>วัตถุดิบบ่อ</div>
          </div>
        </CardUI>
        <FermentationTable classNames="p-4" />
      </div>
    );
  };

export default matetial
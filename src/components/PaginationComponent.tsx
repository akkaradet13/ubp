"use client";

import React from "react";
import { Pagination } from "@nextui-org/react";

type PaginationComponentProps = {
  total: number;
  initialPage: number;
};

export default function PaginationComponent({
  total,
  initialPage,
}: PaginationComponentProps) {
  return (
    <Pagination loop showControls total={total} initialPage={initialPage} />
  );
}

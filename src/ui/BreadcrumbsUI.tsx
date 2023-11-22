"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";
import Link from "next/link";

type Breadcrumb = {
  id: number;
  icon: React.ReactNode;
  text: string | React.ReactNode;
  picture: string;
  path: string;
};

type Props = {
  breadcrumbs: Breadcrumb[];
  size?: "sm" | "md" | "lg";
};

export default function BreadcrumbsUI({ breadcrumbs, size = "lg" }: Props) {
  return (
    <Breadcrumbs size={size}>
      {breadcrumbs.map((breadcrumb, index) => (
        <BreadcrumbItem key={index} className="font-bold text-lg">
          <Link href={breadcrumb.path}>{breadcrumb.text}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}

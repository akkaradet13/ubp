"use client";

import React from "react";
import BreadcrumbsUI from "@/ui/BreadcrumbsUI";
import { cardItems } from "@/constants";
import { usePathname } from "next/navigation";
import { AiFillHome } from "react-icons/ai";

type Breadcrumb = {
  id: number;
  icon: React.ReactNode;
  text: string | React.ReactNode;
  picture: string;
  path: string;
};

export default function BreadcrumbComponent() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = React.useState<Breadcrumb[]>([]);

  React.useEffect(() => {
    const dashboard: Breadcrumb = {
      id: 0,
      icon: <AiFillHome />,
      text: <AiFillHome />,
      picture: "",
      path: "/",
    };

    const filterBreads: Breadcrumb[] = [];

    filterBreads.push(
      dashboard,
      ...cardItems.filter((item) => item.path === pathname)
    );
    setBreadcrumbs(filterBreads);
  }, [pathname]);

  return <BreadcrumbsUI breadcrumbs={breadcrumbs} />;
}

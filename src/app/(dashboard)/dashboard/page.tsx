"use client";

import CardUI from "@/ui/CardUI";
import React from "react";
import { cardItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center my-6">
        Dashboard
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {cardItems.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Link href={item.path}>
              <CardUI
                fullWidth
                classNames="w-full h-auto bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                bodyClassName="p-6 flex flex-col items-center justify-center"
              >
                <div className="text-6xl mb-4">
                  <Image
                    src={item.picture}
                    alt={item.picture}
                    width="50"
                    height="50"
                  />
                </div>
                <div className="text-center text-xl font-semibold text-gray-800">
                  {item.text}
                </div>
              </CardUI>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

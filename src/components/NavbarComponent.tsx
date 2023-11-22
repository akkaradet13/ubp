"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";

const NavbarUI: React.FC = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <Navbar shouldHideOnScroll isBordered maxWidth="2xl">
      <NavbarBrand>
        <div className="font-bold text-3xl text-amber-500 flex">
          Ubon Bio Power
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="flex flex-row gap-4 items-center">
          {session?.user && (
            <div className="flex flex-row max-w-sm mx-auto  items-center space-x-4">
              <div className="shrink-0 shadow-full border-stone-800">
                <Image
                  className="h-12 w-12 "
                  src="/assets/UBP_LOGO.svg"
                  width={48}
                  height={48}
                  alt={`${user?.name} ${user?.email}`}
                />
              </div>
              <div>
                <div className="text-md font-medium text-black">
                  {user?.name}
                </div>
                <p className="text-slate-500">{user?.email}</p>
              </div>
            </div>
          )}
          <SignInButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarUI;

"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { LuLogIn } from "react-icons/lu";
import { Button } from "@nextui-org/react";

export default function SignInButton() {
  const { data: session } = useSession();

  const LogoutButton = React.memo(function LogoutButton() {
    return (
      <Button
        color="danger"
        variant="flat"
        startContent={<LuLogIn />}
        onClick={() => signOut({ redirect: true, callbackUrl: "/signIn" })}
      >
        Logout
      </Button>
    );
  });

  const LoginButton = React.memo(function LoginButton() {
    return (
      <Button
        onClick={() => signIn()}
        color="primary"
        href="#"
        variant="flat"
        startContent={<LuLogIn />}
      >
        Login
      </Button>
    );
  });

  return (
    <div>{session && session.user ? <LogoutButton /> : <LoginButton />}</div>
  );
}

"use client";
import LoginComponent from "@/components/LoginComponent";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

export default function SignInPage(props: Readonly<Props>) {
  const { data: session } = useSession();
  if (session?.user) redirect("/dashboard");

  return (
    <LoginComponent
      error={props.searchParams?.error}
      callbackUrl={props.searchParams?.callbackUrl}
    />
  );
}

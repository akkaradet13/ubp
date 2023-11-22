"use client";

import ButtonUI from "@/ui/ButtonUI";
import CardUI from "@/ui/CardUI";
import InputFieldUI from "@/ui/InputFieldUI";
import React, { useState, useEffect, useMemo } from "react";
import { LuLogIn, LuEye, LuEyeOff } from "react-icons/lu";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { Toaster, toast } from "sonner";

type Props = {
  callbackUrl?: string;
  error?: string;
};

export default function LoginComponent({ callbackUrl, error }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string>("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      await signIn("credentials", {
        email: email,
        password: password,
        callbackUrl: callbackUrl ?? "/dashboard",
        redirect: true,
      });
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (error) {
      setErrors(error);
    }
    if (errors) {
      toast.error(errors);
    }
  }, [error, errors]);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <CardUI
        classNames={"mx-10 w-[80%] md:w-[70%] lg:w-[40%]"}
        bodyClassName="flex flex-col flex-wrap gap-y-4 p-4 lg:px-12 lg:py-8"
      >
        <div className="flex justify-center">
          <Image
            src="/assets/UBP_LOGO.svg"
            alt="Picture of the author"
            width={400}
            height={400}
          ></Image>
        </div>
        <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold text-center mb-4">
          ระบบติดตามการหมักก๊าซ UBP
        </h1>
        <Toaster position="top-right" closeButton richColors />
        <form onSubmit={onSubmitHandler} className="w-full">
          <div className="grid gap-y-4">
            <div className="">
              <InputFieldUI
                type="email"
                label="Email"
                onValueChange={(e) => {
                  setEmail(e);
                }}
              />
            </div>
            <div className="">
              <InputFieldUI
                onValueChange={(e) => setPassword(e)}
                label="password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <LuEyeOff className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <LuEye className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
            </div>
          </div>

          <div className="my-6 md:my-6">
            <ButtonUI
              type="submit"
              color="primary"
              size="lg"
              fullWidth
              isDisabled={email && password ? false : true}
              isLoading={loading}
              startContent={loading ? null : <LuLogIn />}
            >
              Login
            </ButtonUI>
          </div>
        </form>
      </CardUI>
    </div>
  );
}

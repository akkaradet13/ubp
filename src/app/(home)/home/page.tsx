"use client";

import React, { useEffect } from "react";
import ButtonUI from "@/ui/ButtonUI";
import LocalStorageUtil from "@/utils/localStorageUtil";

export default function HomePage() {
  useEffect(() => {}, []);
  return (
    <div>
      <ButtonUI
        size="md"
        onClick={() => {
          LocalStorageUtil.set("username", "john_doe");
        }}
      >
        Set local
      </ButtonUI>
      <ButtonUI
        size="md"
        onClick={() => {
          const username = LocalStorageUtil.get<string>("username");
          console.log("username", username);
        }}
      >
        Get local Naja testtest
      </ButtonUI>
    </div>
  );
}

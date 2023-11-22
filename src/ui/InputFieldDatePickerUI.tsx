"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";

type Props = {
  classNames?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
};

export default function InputFieldDatePickerUI({
  classNames,
  value,
  placeholder,
  label,
  onChange,
  onValueChange,
  isDisabled,
}: Props) {
  return (
    <div className="date-picker-container">
      <label className="date-picker-label">{label}</label>
      <Input
        className={`date-picker-input ${classNames}`}
        value={value}
        placeholder={placeholder}
        type="date"
        onChange={onChange}
        onValueChange={onValueChange}
        disabled={isDisabled}
        defaultValue={new Date().toISOString().slice(0, 10)}
      />
    </div>
  );
}

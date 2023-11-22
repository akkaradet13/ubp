import React from "react";
import { Checkbox } from "@nextui-org/react";

type Props = {
  value: string;
  label: string;
  checked?: boolean;
  defaultSelected?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  indeterminate?: boolean;
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  isRequired?: boolean;
  isInvalid?: boolean;
  validationState?: "valid" | "invalid";
  disableAnimation?: boolean;
  classNames?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (isSelected: boolean) => void;
};

export default function CheckboxUI({}: Props) {
  return <Checkbox defaultSelected>Option</Checkbox>;
}

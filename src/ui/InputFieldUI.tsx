import React from "react";
import { Input } from "@nextui-org/react";

type Props = {
  classNames?: string;
  variant?: `flat` | `bordered` | `faded` | `underlined`;
  color?:
    | `default`
    | `primary`
    | `secondary`
    | `success`
    | `warning`
    | `danger`;
  size?: `sm` | `md` | `lg`;
  radius?: `none` | `sm` | `md` | `lg` | `full`;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  type?: `text` | `email` | `password` | `number` | `tel` | `url`;
  label?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  labelPlacement?: `inside` | `outside` | `outside-left`;
  fullWidth?: boolean;
  isClearable?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  baseRef?: React.Ref<HTMLInputElement>;
  disableAnimation?: boolean;
  onChange?: (e: any) => void;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
};

export default function InputFieldUI({
  classNames,
  variant,
  color,
  size,
  radius,
  value,
  defaultValue,
  placeholder,
  description,
  errorMessage,
  startContent,
  endContent,
  labelPlacement,
  fullWidth,
  isClearable,
  isInvalid,
  isDisabled,
  isReadOnly,
  isRequired,
  baseRef,
  disableAnimation,
  type,
  label,
  onChange,
  onValueChange,
  onClear,
}: Readonly<Props>) {
  return (
    <Input
      className={classNames}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      description={description}
      errorMessage={errorMessage}
      startContent={startContent}
      endContent={endContent}
      labelPlacement={labelPlacement}
      fullWidth={fullWidth}
      isClearable={isClearable}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      disableAnimation={disableAnimation}
      type={type}
      label={label}
      onChange={(e) => onChange}
      onValueChange={onValueChange}
      onClear={onClear}
    />
  );
}

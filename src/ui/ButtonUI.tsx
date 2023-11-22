import React from "react";
import { Button } from "@nextui-org/react";

type Props = {
  type?: `button` | `submit` | `reset`;
  children?: React.ReactNode;
  variant?:
  | `solid`
  | `bordered`
  | `light`
  | `flat`
  | `faded`
  | `shadow`
  | `ghost`;
  color?:
  | `default`
  | `primary`
  | `secondary`
  | `success`
  | `warning`
  | `danger`;
  size?: `sm` | `md` | `lg`;
  radius?: `none` | `sm` | `md` | `lg` | `full`;
  spinnerPlacement?: `start` | `end`;
  fullWidth?: boolean;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableRipple?: boolean;
  disableAnimation?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClick?: () => void;
  onPress?: () => void;
};

export default function ButtonUI({
  type,
  children,
  variant,
  color,
  size = "md",
  radius,
  spinnerPlacement,
  fullWidth,
  isIconOnly,
  isDisabled,
  isLoading,
  disableRipple,
  disableAnimation,
  startContent,
  endContent,
  onClick,
  onPress,
}: Readonly<Props>) {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      spinnerPlacement={spinnerPlacement}
      fullWidth={fullWidth}
      isIconOnly={isIconOnly}
      isDisabled={isDisabled}
      isLoading={isLoading}
      disableRipple={disableRipple}
      disableAnimation={disableAnimation}
      onClick={onClick}
      onPress={onPress}
      startContent={startContent}
      endContent={endContent}
    >
      {children}
    </Button>
  );
}

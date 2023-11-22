import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

type Props = {
  classNames?: string;
  bodyClassName?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isHoverable?: boolean;
  isPressable?: boolean;
  isFooterBlurred?: boolean;
  allowTextSelectionOnPress?: boolean;
  onPress?: () => void;
  onPressChange?: (isPressed: boolean) => void;
  onPressUp?: (e: any) => void;
  onPressEnd?: (e: any) => void;
  onPressStart?: (e: any) => void;
  onClick?: () => void;
};

export default function CardUI({
  header,
  children,
  footer,
  classNames,
  bodyClassName,
}: Readonly<Props>) {
  return (
    <Card className={classNames}>
      {header && <CardHeader>{header}</CardHeader>}
      <CardBody className={bodyClassName}>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}

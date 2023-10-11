import React from "react";
import { Button } from "@nextui-org/react";
export const NextButton = ({
  child,
  onClick,
  onPress,
  children,
  variant,
  color,
  size,
  radius,
  spinnerPlacement,
  fullWidth,
  isIconOnly,
  isDisabled,
  isLoading,
  disableRipple,
  disableAnimation,
  className,
}) => {
  return (
    <Button
      onPress={onPress}
      onClick={onClick}
      children={child}
      color={color}
      variant={variant}
      size={size}
      radius={radius}
      spinnerPlacement={spinnerPlacement}
      fullWidth={fullWidth}
      isIconOnly={isIconOnly}
      isDisabled={isDisabled}
      isLoading={isLoading}
      disableRipple={disableRipple}
      disableAnimation={disableAnimation}
      className={className}
    >
      {children}
    </Button>
  );
};

export default NextButton;

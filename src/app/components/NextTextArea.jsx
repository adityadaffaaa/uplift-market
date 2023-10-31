"use client";

import { Textarea } from "@nextui-org/react";

import React from "react";

export const NextTextArea = ({
  id,
  children,
  minRows,
  maxRows,
  cacheMeasurements,
  variant,
  color,
  size,
  radius,
  label,
  value,
  defaultValue,
  placeholder,
  description,
  errorMessage,
  labelPlacement,
  fullWidth,
  isRequired,
  isReadOnly,
  isDisabled,
  isInvalid,
  validationState,
  disableAnimation,
  classNames,
  onChange,
  onValueChange,
  onClear,
  onHeightChange,
  className,
  rightContent,
}) => {
  return (
    <div className={`relative ${fullWidth && "w-full"} `}>
      <Textarea
        id={id ?? ""}
        label={label}
        labelPlacement={labelPlacement ?? "outside"}
        variant={variant ?? "bordered"}
        placeholder={
          placeholder ?? "Enter your description"
        }
        className={className}
        size={size ?? "md"}
        children={children}
        minRows={minRows ?? 3}
        maxRows={maxRows ?? 8}
        cacheMeasurements={cacheMeasurements}
        color={color ?? "primary"}
        radius={radius}
        value={value && value}
        defaultValue={defaultValue && defaultValue}
        fullWidth={fullWidth ? true : false}
        isRequired={isRequired ? true : false}
        isReadOnly={isReadOnly ? true : false}
        isDisabled={isDisabled ? true : false}
        isInvalid={isInvalid ? true : false}
        validationState={validationState}
        disableAnimation={disableAnimation}
        classNames={classNames}
        onChange={onChange}
        onValueChange={onValueChange}
        onClear={onClear}
        onHeightChange={onHeightChange}
        description={description}
        errorMessage={errorMessage}
      />
      {rightContent && (
        <span
          className={`absolute right-[5%] top-1/2 ${
            !label && "-translate-y-1/2"
          }`}
        >
          {rightContent}
        </span>
      )}
    </div>
  );
};

export default NextTextArea;

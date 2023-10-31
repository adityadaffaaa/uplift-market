"use client";
import React from "react";
import { Input } from "@nextui-org/react";
export const NextInputTextField = ({
  id,
  name,
  type,
  label,
  size,
  placeholder,
  defaultValue,
  labelPlacement,
  endContent,
  startContent,
  onBlur,
  onChange,
  color,
  radius,
  description,
  errorMessage,
  ref,
  disabled,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  children,
  fullWidth,
  variant,
  required,
  readOnly,
  isInvalid,
  className,
  classNames,
}) => {
  return (
    <Input
      id={id}
      size={size ?? "md"}
      name={name}
      type={type ?? "text"}
      label={label}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      isDisabled={disabled}
      max={max}
      maxLength={maxLength}
      min={min}
      minLength={minLength}
      pattern={pattern}
      children={children}
      color={color ?? "primary"}
      radius={radius}
      description={description}
      errorMessage={errorMessage}
      variant={variant ?? "bordered"}
      endContent={endContent}
      startContent={startContent}
      labelPlacement={labelPlacement ?? "outside"}
      defaultValue={defaultValue ?? ""}
      placeholder={placeholder}
      className={className}
      classNames={classNames}
      isRequired={required ? true : false}
      fullWidth={fullWidth ? true : false}
      isReadOnly={readOnly ? true : false}
      isInvalid={isInvalid ? true : false}
    />
  );
};

const TextInput = () => {};
export default NextInputTextField;

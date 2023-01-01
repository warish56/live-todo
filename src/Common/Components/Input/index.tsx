import { Icon } from "@components/Icon";
import React from "react";
import styles from "./style.module.css";

type InputProps = {
  size: "xxl" | "xl" | "large" | "medium" | "small";
  type?: string;
  variant?: "primary" | "secondary";
} & React.HTMLAttributes<HTMLInputElement>;

export const BaseInput = React.forwardRef(
  (
    { className, size, type, variant, ...rest }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const sizeClass = styles[size];
    const variantClass = styles[`input_${variant}`];
    return (
      <input
        ref={ref}
        type={type}
        className={`${styles.input_elem} ${sizeClass} ${variantClass} ${className}`}
        {...rest}
      />
    );
  }
);

export const TransparentInput = React.forwardRef(
  (
    { className, ...rest }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <BaseInput
        ref={ref}
        className={`${styles.borderless} ${className}`}
        {...rest}
      />
    );
  }
);

type DateInputProps = {
  label: string;
} & InputProps;

export const DateInput = ({ label, ...rest }: DateInputProps) => {
  const sizeClass = styles[rest.size];

  return (
    <label htmlFor={rest.id} className={`${styles.date_cont} ${sizeClass}`}>
      <TransparentInput {...rest} type="date" />
    </label>
  );
};

export const CheckboxInput = ({ className, ...rest }: InputProps) => {
  return (
    <BaseInput
      {...rest}
      className={`${styles.check_box} ${className}`}
      type="checkbox"
    />
  );
};

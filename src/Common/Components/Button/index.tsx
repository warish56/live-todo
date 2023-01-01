import { Icon } from "@components/Icon";
import { ReactElement } from "react";
import { useNavigate } from "react-router";
import styles from "./style.module.css";

type ButtonProps = {
  children: ReactElement | string;
  variant: "primary" | "secondary";
  shadow?: boolean;
  block?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export const BaseButton = ({
  children,
  variant,
  className,
  block = true,
  shadow,
  ...rest
}: ButtonProps) => {
  const variantClass = styles[`btn_${variant}`];
  const blockClass = block ? styles.block : "";
  const shadowClass = shadow ? styles.shadow : "";
  return (
    <button
      className={`${styles.btn_cont} ${variantClass} ${blockClass} ${shadowClass} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const AddButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <BaseButton {...rest} className={styles.add_btn} shadow variant="primary">
      {children}
    </BaseButton>
  );
};

export const IconButton = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <BaseButton
      {...rest}
      className={`${styles.icon_btn} ${className}`}
      variant="primary"
    >
      {children}
    </BaseButton>
  );
};

export const BackButton = (props: Omit<ButtonProps, "children">) => {
  const navigate = useNavigate();
  return (
    <IconButton {...props} onClick={() => navigate(-1)} shadow={false}>
      <Icon name="fa-solid fa-arrow-left" />
    </IconButton>
  );
};

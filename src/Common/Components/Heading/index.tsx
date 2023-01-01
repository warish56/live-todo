import { ReactElement } from "react";
import styles from "./style.module.css";

type HeadingProps = {
  children: ReactElement | string;
  size: "large" | "medium" | "small" | "extra_large";
  bold?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({ children, size, bold, ...rest }: HeadingProps) => {
  const fontStyle = styles[size];
  const boldStyle = bold ? styles.bold : "";
  return (
    <h1
      className={`a_heading ${styles.heading} ${fontStyle} ${boldStyle}`}
      {...rest}
    >
      {children}
    </h1>
  );
};

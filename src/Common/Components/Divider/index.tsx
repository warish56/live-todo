import React from "react";
import styles from "./style.module.css";

export const Divider = (props: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
  return <span className={styles.divider} {...props} />;
};

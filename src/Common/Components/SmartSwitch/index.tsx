import React from "react";
import ReactDom from "react-dom";
import styles from "./style.module.css";

let element: HTMLDivElement | null = null;

const Swicth = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={styles.container}>
      +
    </button>
  );
};

type SmartSwitchProps = {} & React.HTMLAttributes<HTMLButtonElement>;

export const SmartSwitch = (props: SmartSwitchProps) => {
  if (!element) {
    element = document.createElement("div");
    document.body.appendChild(element);
  }

  return ReactDom.createPortal(<Swicth {...props} />, element);
};

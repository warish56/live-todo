import styles from "./style.module.css";

type IconProps = {
  name: string;
};
export const Icon = ({ name }: IconProps) => {
  return <i className={`${name} ${styles.cont}`}></i>;
};

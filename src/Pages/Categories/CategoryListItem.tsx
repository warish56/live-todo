import { Heading } from "@components/Heading";
import styles from "./style.module.css";

type ItemProps = {
  id: string;
  title: string;
  count: number;
  onClick: (id: string) => void;
};

export const CategoryListItem = ({ id, title, count, onClick }: ItemProps) => {
  return (
    <div onClick={() => onClick(id)} className={styles.list_item}>
      <Heading size="medium" bold>
        {title}
      </Heading>
      <span className={styles.count}>{count}</span>
    </div>
  );
};

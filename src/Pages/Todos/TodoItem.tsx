import { Heading } from "@components/Heading";
import { ITodo } from "@data/index";

import styles from "./style.module.css";

type TodoItemProps = {
  onClick: (id: string) => void;
} & ITodo;

export const TodoItem = (props: TodoItemProps) => {
  return (
    <div onClick={() => props.onClick(props.id)} className={styles.item_cont}>
      <Heading size="medium">{props.title}</Heading>
      <span className={styles.date}>{props.dueDate}</span>
    </div>
  );
};

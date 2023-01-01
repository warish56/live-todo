import { useStore } from "@context/StoreContext";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./style.module.css";
import { TodoItem } from "./TodoItem";

export const TodosList = () => {
  const store = useStore();
  const params = useParams();
  const navigate = useNavigate();

  const currentCategoryTodos = store.todos.filter(
    (todo) => todo.categoryId === params.categoryId
  );

  const todos = useMemo(() => {
    return currentCategoryTodos.map((data) => {
      return <TodoItem onClick={(id) => navigate(`${id}/edit`)} {...data} />;
    });
  }, [currentCategoryTodos]);

  return <div className={styles.content}>{todos}</div>;
};

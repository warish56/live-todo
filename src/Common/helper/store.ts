import { IStore } from "@context/StoreContext";
import { ICategory, ITodo } from "@data/index";

const getNewCategoryData = (id: string, title: string): ICategory => {
  return {
    title,
    count: 0,
    id,
  };
};

export const createNewCategoryInStore = (
  prevStore: IStore,
  title: string
): IStore => {
  return {
    ...prevStore,
    categories: [
      ...prevStore.categories,
      getNewCategoryData(String(Math.random() * 100), title),
    ],
  };
};

export const createNewTodoInStore = (
  prevStore: IStore,
  data: ITodo
): IStore => {
  return {
    ...prevStore,
    todos: [...prevStore.todos, data],
  };
};

export const editTodoInStore = (prevStore: IStore, data: ITodo): IStore => {
  const prevTodos = [...prevStore.todos];
  const todo = prevTodos.find((item) => item.id === data.id);
  todo && Object.assign(todo, data);
  return {
    ...prevStore,
    todos: prevTodos,
  };
};

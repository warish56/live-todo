import { useDispatch } from "@context/StoreContext";
import { ITodo } from "@data/index";

export const useCreateTodo = () => {
  const dispatch = useDispatch();
  const createTodo = (data: ITodo) => {
    dispatch({
      type: "Create/Todo",
      payload: { data },
    });
  };

  const editTodo = (data: ITodo) => {
    dispatch({
      type: "Edit/Todo",
      payload: { data },
    });
  };

  return { createTodo, editTodo };
};

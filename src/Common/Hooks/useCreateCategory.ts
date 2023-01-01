import { StoreActions, useDispatch } from "@context/StoreContext";

export const useCreateCategory = () => {
  const dispatch = useDispatch();
  const createCategory = (title: string) => {
    dispatch({
      type: "Create/Category",
      payload: { title },
    });
  };

  return { createCategory };
};

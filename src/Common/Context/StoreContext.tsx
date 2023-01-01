import { CategoriesData, ICategory, ITodo } from "@data/index";
import {
  createNewCategoryInStore,
  createNewTodoInStore,
  editTodoInStore,
} from "@helper/store";
import React, { ReactElement, useContext, useReducer } from "react";

export const StoreActions = {
  "Create/Category": "Create/Category",
  "Create/Todo": "Create/Todo",
  "Edit/Todo": "Edit/Todo",
};

type ProviderProps = {
  children: ReactElement;
};

type ReducerAction = {
  type: keyof typeof StoreActions;
  payload?: any;
};

type StoreReducerParams<T> = {
  (store: T, action: ReducerAction): T;
};

export type IStore = {
  categories: ICategory[];
  todos: ITodo[];
};

export type IStoreContext = {
  store: IStore;
  dispatch: (props: ReducerAction) => void;
};

const intialStore = {
  categories: CategoriesData,
  todos: [],
};

const initialContext = {
  store: intialStore,
  dispatch: () => {},
};

const StoreContext = React.createContext<IStoreContext>(initialContext);

const storeReducer: StoreReducerParams<IStore> = (store, action) => {
  switch (action.type) {
    case StoreActions["Create/Category"]: {
      const { payload } = action;
      return createNewCategoryInStore(store, payload.title);
    }
    case StoreActions["Create/Todo"]: {
      const { payload } = action;
      return createNewTodoInStore(store, payload.data);
    }

    case StoreActions["Edit/Todo"]: {
      const { payload } = action;
      return editTodoInStore(store, payload.data);
    }
    default:
      return store;
  }
};

export const StoreProvider = ({ children }: ProviderProps) => {
  const [store, dispatch] = useReducer(storeReducer, intialStore);
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext).store;
};

export const useDispatch = () => {
  return useContext(StoreContext).dispatch;
};

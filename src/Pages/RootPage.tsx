import { Routes, Route } from "react-router-dom";
import { CategoriesList } from "./Categories/CatergoryList";
import { Todos } from "./Todos/Todos";
import { CreateCategory } from "./CreateCategory/CreateCategory";
import { CreateTodo } from "./CreateTodo/CreateTodo";
import { TodosList } from "./Todos/TodosList";

export const RootPage = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoriesList />}>
        <Route path="create_category" element={<CreateCategory />} />
      </Route>

      <Route path="/category/:categoryId/todos" element={<Todos />}>
        <Route path="create" element={<CreateTodo />} />
        <Route path=":todoId/edit" element={<CreateTodo />} />
      </Route>
    </Routes>
  );
};

import { BaseButton, IconButton } from "@components/Button";
import { Divider } from "@components/Divider";
import { Heading } from "@components/Heading";
import { Icon } from "@components/Icon";
import { BaseInput, DateInput } from "@components/Input";
import { useStore } from "@context/StoreContext";
import { ITodo, ITodoItem } from "@data/index";
import { useCreateTodo } from "@hooks/useCreateTodo";
import { useInput } from "@hooks/useInput";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate, useParams } from "react-router";

import styles from "./style.module.css";

type ItodoItem = {
  id: string;
  title: string;
};

type todoItemProps = {
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
} & ItodoItem;

const TodoItem = ({ title, onDelete, onEdit, id }: todoItemProps) => {
  const [isEditModeActive, setEditMode] = useState(false);
  const titleInput = useInput(title);

  const toggleEdit = () => {
    setEditMode((prev) => !prev);
  };

  const onSave = () => {
    onEdit(id, titleInput.inputProps.value);
    toggleEdit();
  };

  return (
    <div className={styles.item_cont}>
      <Icon name="fa-solid fa-grip-vertical" />
      {!isEditModeActive ? (
        <Heading size="medium">{title}</Heading>
      ) : (
        <BaseInput size="medium" variant="primary" {...titleInput.inputProps} />
      )}
      <div className={styles.icon_grp}>
        {!isEditModeActive && (
          <>
            <IconButton
              onClick={toggleEdit}
              className={styles.icon_btn}
              variant="primary"
            >
              <Icon name="fa-solid fa-pen-to-square" />
            </IconButton>

            <IconButton
              className={`${styles.icon_btn} ${styles.icon_red}`}
              variant="primary"
              onClick={() => onDelete(id)}
            >
              <Icon name="fa-solid fa-trash" />
            </IconButton>
          </>
        )}

        {isEditModeActive && (
          <IconButton
            className={`${styles.icon_btn} ${styles.icon_red}`}
            variant="primary"
            onClick={onSave}
          >
            <Icon name="fa-solid fa-floppy-disk" />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export const CreateTodo = () => {
  const location = useLocation();
  const isEditMode = location.pathname.includes("/edit");

  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  const itemInput = useInput();
  const nameInput = useInput();
  const dateInput = useInput();
  const listRef = useRef<HTMLDivElement>(null);
  const { createTodo, editTodo } = useCreateTodo();
  const params = useParams();
  const navigate = useNavigate();
  const store = useStore();

  useEffect(() => {
    if (!isEditMode) {
      return;
    }
    const todoData = store.todos.find((item) => item.id === params.todoId);
    if (todoData) {
      setTodoItems(todoData.items);
      nameInput.setValue(todoData.title);
      dateInput.setValue(todoData.dueDate);
    }
  }, []);

  const scrollToEnd = () => {
    listRef.current &&
      listRef.current.scrollBy(0, listRef.current.scrollHeight);
  };

  const addTodo = (id: string, title: string) => {
    setTodoItems((prevTodos) => [...prevTodos, { id, title }]);
    setTimeout(() => {
      scrollToEnd();
    }, 200);
  };
  const editTodoInList = (id: string, text: string) => {
    setTodoItems((prevTodos) => {
      const todos = [...prevTodos];
      const todo = todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = text;
      }
      return todos;
    });
  };

  const removeTodo = (id: string) => {
    setTodoItems((prevTodos) => {
      const todos = [...prevTodos];
      const todoIndex = todos.findIndex((todo) => todo.id === id);
      todos.splice(todoIndex, 1);
      return todos;
    });
  };

  const onAddTodo = () => {
    if (!itemInput.inputProps.value) {
      return;
    }
    addTodo(String(Math.random() * 100), itemInput.inputProps.value);
    itemInput.clearInput();
  };

  const onSave = () => {
    let todoData = {
      title: nameInput.inputProps.value,
      dueDate: dateInput.inputProps.value,
      items: todoItems,
      categoryId: params.categoryId || "",
    };
    if (isEditMode) {
      editTodo({
        ...todoData,
        id: params.todoId || "",
      });
    } else {
      const data = {
        ...todoData,
        id: String(Math.random() * 1203012),
      };
      createTodo(data);
    }
    navigate(-1);
  };

  const todosList = useMemo(() => {
    return todoItems.map(({ title, id }) => {
      return (
        <TodoItem
          key={id}
          id={id}
          title={title}
          onDelete={removeTodo}
          onEdit={editTodoInList}
        />
      );
    });
  }, [todoItems]);

  return (
    <section>
      <BaseInput
        className={styles.name_inp}
        size="xl"
        variant="primary"
        placeholder="Todo Name"
        {...nameInput.inputProps}
      />

      <DateInput
        style={{ marginBottom: 20 }}
        label="Due Date"
        size="large"
        type="date"
        id="date_input"
        {...dateInput.inputProps}
      />
      <Divider />
      <div ref={listRef} className={styles.list_cont}>
        {todosList}
      </div>

      <BaseInput
        className={styles.inp}
        size="large"
        variant="primary"
        placeholder="Enter your item"
        {...itemInput.inputProps}
      />
      <BaseButton onClick={onAddTodo} shadow variant="primary">
        <span>
          Add Item <Icon name="fa-solid fa-plus" />
        </span>
      </BaseButton>

      <BaseButton
        className={styles.save_btn}
        onClick={onSave}
        shadow
        variant="primary"
      >
        <span>{isEditMode ? "Save" : "Create"}</span>
      </BaseButton>
    </section>
  );
};

import { useMemo } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useStore } from "@context/StoreContext";

import { AddButton, BackButton } from "@components/Button";
import { Heading } from "@components/Heading";
import { Icon } from "@components/Icon";
import { useLocation } from "react-router";

import styles from "./style.module.css";
import { TodosList } from "./TodosList";

enum EPage {
  TODO_LIST,
  TODO_CREATE,
  TODO_EDIT,
}

export const Todos = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const store = useStore();

  const getPageType = () => {
    if (location.pathname.includes("/todos/create")) {
      return EPage.TODO_CREATE;
    } else if (location.pathname.includes("/edit")) {
      return EPage.TODO_EDIT;
    } else {
      return EPage.TODO_LIST;
    }
  };
  const pageType = getPageType();

  const category = useMemo(() => {
    return store.categories.find((item) => item.id === params.categoryId);
  }, [params.categoryId]);

  const getPageHeading = () => {
    switch (pageType) {
      case EPage.TODO_CREATE:
        return "Create Todo";
      case EPage.TODO_EDIT:
        return "Edit Todo";
      default:
        return category?.title;
    }
  };

  const heading = getPageHeading();

  if (!category) {
    return <h1>Empty Todos</h1>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.heading_area}>
        <BackButton variant="primary" />
        <Heading size="extra_large">{heading || ""}</Heading>
      </div>

      <div className={styles.child}>
        <Outlet />
      </div>

      {pageType === EPage.TODO_LIST && (
        <>
          <TodosList />
          <AddButton
            onClick={() => navigate("create")}
            className={styles.add_btn}
            variant="primary"
          >
            <Icon name="fa-solid fa-plus" />
          </AddButton>
        </>
      )}
    </section>
  );
};

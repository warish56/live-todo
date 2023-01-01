import { useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Heading } from "@components/Heading";
import { CategoryListItem } from "./CategoryListItem";
import { useSorter } from "@hooks/useSorter";
import { ICategory } from "@data/index";
import { useStore } from "@context/StoreContext";
import { AddButton } from "@components/Button";
import { Icon } from "@components/Icon";
import styles from "./style.module.css";

export const CategoriesList = () => {
  const navigate = useNavigate();
  const store = useStore();
  const sortedCategories = useSorter<ICategory>({
    sortBy: "title",
    data: store.categories,
  });

  const onCategoryClick = (id: string) => {
    navigate(`/category/${id}/todos`);
  };

  const listItems = useMemo(() => {
    return sortedCategories.map((category) => {
      const categoryItems = store.todos.filter(
        (item) => item.categoryId === category.id
      );
      return (
        <CategoryListItem
          onClick={onCategoryClick}
          key={category.id}
          {...category}
          count={categoryItems.length}
        />
      );
    });
  }, [sortedCategories]);

  return (
    <section id="category_list" className={`${styles.list_container}`}>
      <Heading size="extra_large" bold style={{ marginLeft: 15 }}>
        Categoris list
      </Heading>
      <div className={styles.list_wrapper}>{listItems}</div>
      <AddButton
        onClick={() => navigate("/create_category")}
        className={styles.add_btn}
        variant="primary"
      >
        <Icon name="fa-solid fa-plus" />
      </AddButton>
      <Outlet />
    </section>
  );
};

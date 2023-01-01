import { BaseButton } from "@components/Button";
import { Heading } from "@components/Heading";
import { Icon } from "@components/Icon";
import { TransparentInput } from "@components/Input";
import { useCreateCategory } from "@hooks/useCreateCategory";
import { useInput } from "@hooks/useInput";
import { useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";

import styles from "./style.module.css";

type CreateCategoryProps = {} & React.HTMLAttributes<HTMLDivElement>;

const CreateCategoryContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { createCategory } = useCreateCategory();
  const categoryInput = useInput();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onAdd = () => {
    createCategory(categoryInput.inputProps.value);
    navigate("/");
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div onClick={() => navigate("/")} className={styles.overlay} />
        <Heading className={styles.head} size="large">
          Create Category
        </Heading>
        <TransparentInput
          ref={inputRef}
          size="xxl"
          placeholder="Enter category"
          className={styles.input}
          {...categoryInput.inputProps}
        />
        <BaseButton onClick={onAdd} variant="primary" block>
          <span>
            Add <Icon name="fa-solid fa-plus" />
          </span>
        </BaseButton>
      </div>
    </section>
  );
};

export const CreateCategory = (props: CreateCategoryProps) => {
  const elem = useMemo(() => {
    return document.getElementById("category_list");
  }, []);
  if (!elem) {
    return null;
  }
  return ReactDOM.createPortal(<CreateCategoryContainer {...props} />, elem);
};

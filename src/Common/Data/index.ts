export interface ICategory {
  id: string;
  title: string;
  count: number;
}

export interface ITodoItem {
  id: string;
  title: string;
}
export interface ITodo {
  id: string;
  title: string;
  dueDate: string;
  items: ITodoItem[];
  categoryId: string;
}

export const CategoriesData: ICategory[] = [
  {
    id: "1",
    title: "Home",
    count: 2,
  },

  {
    id: "2",
    title: "Office",
    count: 4,
  },

  {
    id: "3",
    title: "Birthdays",
    count: 1,
  },

  {
    id: "4",
    title: "Personal",
    count: 8,
  },
];

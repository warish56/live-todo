import { useMemo } from "react";

type sorterProps = {
  <T>({ sortBy, data }: { sortBy: keyof T; data: T[] }): T[];
};

export const useSorter: sorterProps = ({ sortBy, data }) => {
  return useMemo(() => {
    return data.sort((a, b) => (a[sortBy] as number) - (b[sortBy] as number));
  }, [sortBy, data]);
};

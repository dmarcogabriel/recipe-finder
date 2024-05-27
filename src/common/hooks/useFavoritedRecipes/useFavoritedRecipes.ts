import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";

import { getFavoritedList } from "./favorite.service";

export const useFavoritedRecipes = () => {
  const query = useQuery({
    queryKey: ['favorited'],
    queryFn: getFavoritedList
  });

  const findById = useCallback((id?: string) => {
    if (!id) return false;

    return !!query.data?.some(favorited => favorited.id === id);
  }, [query.data]);

  return {
    ...query, findById };
};

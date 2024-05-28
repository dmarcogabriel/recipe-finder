import { useQuery } from "@tanstack/react-query";

import { ISortRecipeQuery } from "@app/common/types";

import { getRecipes } from "./recipe.service";


export const useRecipeList = (search: string, sortBy?: ISortRecipeQuery) => {
  const query = useQuery({
    queryKey: ['recipes', search, sortBy],
    queryFn: () => getRecipes({ search, sortBy })
  });

  return query;
};

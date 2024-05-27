import { useQuery } from "@tanstack/react-query";

import { getRecipes } from "./recipe.service";


export const useRecipeList = (search: string) => {
  const query = useQuery({
    queryKey: ['recipes', search],
    queryFn: () => getRecipes({ search })
  });

  return query;
};

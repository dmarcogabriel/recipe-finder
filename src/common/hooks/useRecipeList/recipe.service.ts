import { IRecipe, ISortRecipeQuery } from '@app/common/types';
import api from '@app/utils/api';

type IGetRecipesQuery = {
  search?: string;
  sortBy?: ISortRecipeQuery;
};
export const getRecipes = async (query: IGetRecipesQuery) => {
  const params: IGetRecipesQuery = {};

  if (query.search) {
    params.search = query.search;
  }

  if (query.sortBy) {
    params.sortBy = query.sortBy;
  }

  const { data } = await api.get<IRecipe[]>('recipes', { params });

  return data;
};

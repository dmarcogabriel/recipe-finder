import { IRecipe } from '@app/common/types';
import api from '@app/utils/api';

type IGetRecipesQuery = {
  search: string;
};
export const getRecipes = async (query: IGetRecipesQuery) => {
  const { data } = await api.get<IRecipe[]>('recipes', {
    params: {
      search: query.search
    }
  });

  return data;
};

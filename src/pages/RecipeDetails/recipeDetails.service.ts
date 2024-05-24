import { IRecipe } from '@app/common/types';
import api from '@app/utils/api';

type IGetRecipeDetailsParams = {
  recipeId?: string;
};
export const getRecipeDetailsById = async ({recipeId}: IGetRecipeDetailsParams) => {
  if (!recipeId) throw new Error();

  const { data } = await api.get<IRecipe>(`recipes/${recipeId}`);

  return data;
};

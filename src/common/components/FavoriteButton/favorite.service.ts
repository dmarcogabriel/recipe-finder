import api from '@app/utils/api';


export const favoriteRecipeById = async (recipeId?: string) => {
  if (!recipeId) return;

  await api.post('favorited', { recipeId });
};

export const unFavoriteRecipeById = async (recipeId?: string) => {
  if (!recipeId) return;

  await api.delete(`favorited/${recipeId}`);
};

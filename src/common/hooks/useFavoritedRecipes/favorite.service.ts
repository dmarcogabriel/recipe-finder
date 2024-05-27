import { IRecipe } from '@app/common/types';
import api from '@app/utils/api';


export const getFavoritedList = async () => {
  const { data } = await api.get<IRecipe[]>('favorited');

  return data;
};

import FavoritedIcon from '@mui/icons-material/Star';
import UnFavoritedIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';
import { useMutation } from '@tanstack/react-query';

import { useFavoritedRecipes } from '@app/common/hooks/useFavoritedRecipes';

import { favoriteRecipeById, unFavoriteRecipeById } from './favorite.service';


type IProps = {
  recipeId?: string
};
export const FavoriteButton = ({ recipeId }: IProps) => {
  const { findById, refetch } = useFavoritedRecipes();

  const favoriteMutation = useMutation({
    mutationFn: () => favoriteRecipeById(recipeId),
    onSuccess() {
      refetch();
    }
  });

  const unFavoriteMutation = useMutation({
    mutationFn: () => unFavoriteRecipeById(recipeId),
    onSuccess() {
      refetch();
    }
  });


  const handleFavorite = () => {
    if (findById(recipeId)) {
      unFavoriteMutation.mutate();
      return;
    }

    favoriteMutation.mutate();
  };

  return (
    <IconButton onClick={handleFavorite}>
      {findById(recipeId) ? <FavoritedIcon /> : <UnFavoritedIcon />}
    </IconButton>
  );
};

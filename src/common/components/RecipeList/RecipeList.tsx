import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import { IRecipe } from '@app/common/types';

import { RecipeItem } from './RecipeItem';
import { RecipeItemPlaceholder } from './RecipeItemPlaceholder';


type IProps = {
  recipes: IRecipe[]
  isLoading: boolean
};
export const RecipeList = ({ recipes, isLoading }: IProps) => {
  if (!recipes.length && !isLoading) {
    return <Alert severity="info">No items here.</Alert>;
  }

  return (
    <Grid container spacing={2}>
      {isLoading && Array.from({ length: 10 }).map((_, i) => (
        <RecipeItemPlaceholder key={String(i + 1)} />
      ))}

      {!isLoading && recipes?.map(recipe => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </Grid>
  );
};
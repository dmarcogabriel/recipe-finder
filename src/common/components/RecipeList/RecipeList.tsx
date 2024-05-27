import Box from '@mui/material/Box';

import { IRecipe } from '@app/common/types';

import { RecipeItem } from './RecipeItem';


type IProps = {
  recipes: IRecipe[]
};
export const RecipeList = ({ recipes }: IProps) => (
  <Box sx={{ display: 'grid', gap: 2 }}>
    {recipes?.map(recipe => (
      <RecipeItem
        key={recipe.id}
        recipe={recipe}
      />
    ))}
  </Box>
);

import { useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useQuery } from "@tanstack/react-query";

import recipePlaceholder from '@app/common/assets/recipePlaceholder.jpg';

import { getRecipeDetailsById } from "./recipeDetails.service";

type IRecipeDetailsParams = {
  recipeId: string
};
export const RecipeDetails = () => {
  const { recipeId } = useParams<IRecipeDetailsParams>();
  const [imageHasError, setImageHasError] = useState(false);

  const query = useQuery({
    queryKey: ['recipeDetails', recipeId],
    queryFn: () => getRecipeDetailsById({recipeId}),
  });

  return (
    <Box sx={{ p: 8 }}>
      <Card>
        <CardHeader
          title={query.data?.name}
          action={(
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          )}
        />
        <CardMedia
          component="img"
          height="190"
          image={imageHasError ? query.data?.photo : recipePlaceholder}
          alt={query.data?.name}
          onError={() => {
            setImageHasError(true);
          }}
        />

        <CardContent sx={{ display: 'grid', gap: 4 }}>
          <Box>
            <Typography variant="subtitle1">Ingredients Required</Typography>
            {query.data?.ingredients.map(ingredient => (
              <Box key={ingredient.id} sx={{ display: 'flex', gap: 2 }}>
                <Typography>{ingredient.name}</Typography>
                <Typography>{ingredient.quantity}</Typography>
              </Box>
            ))}
          </Box>

          <Divider />

          <Box>
            <Typography variant="subtitle1">Cooking Instructions</Typography>
            {query.data?.instructions.map(instruction => (
              <Typography key={instruction.id}>{instruction.step}</Typography>
            ))} 
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

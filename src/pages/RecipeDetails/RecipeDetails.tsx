import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubHeader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import { useQuery } from "@tanstack/react-query";

import recipePlaceholder from '@app/common/assets/recipePlaceholder.jpg';
import { ErrorAlert } from "@app/common/components/ErrorAlert";
import { FavoriteButton } from "@app/common/components/FavoriteButton";
import { Header } from "@app/common/components/Header";

import { getRecipeDetailsById } from "./recipeDetails.service";
import { RecipeDetailsPlaceholder } from "./RecipeDetailsPlaceholder";

type IRecipeDetailsParams = {
  recipeId: string
};
export const RecipeDetails = () => {
  const { recipeId } = useParams<IRecipeDetailsParams>();
  const [imageHasError, setImageHasError] = useState(false);
  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['recipeDetails', recipeId],
    queryFn: () => getRecipeDetailsById({recipeId}),
  });

  const handleImageError = () => {
    setImageHasError(true);
  };

  const handleError = () => {
    navigate(-1);
  };

  return (
    <>
      <Header title={data?.name ?? 'Loading...'} />

      <Container sx={{ py: 2 }} maxWidth="md">
        {isLoading && <RecipeDetailsPlaceholder />}

        {!isLoading && (
          <Card>
            <CardHeader
              title={data?.name}
              action={(
                <FavoriteButton recipeId={recipeId} />
              )}
            />
            <CardMedia
              component="img"
              height="190"
              image={imageHasError ? data?.photo : recipePlaceholder}
              alt={data?.name}
              onError={handleImageError}
            />

            <CardContent sx={{ display: 'grid', gap: 2 }}>
              <List>
                <ListSubHeader>Ingredients Required</ListSubHeader>
                {data?.ingredients.map(ingredient => (
                  <ListItem key={ingredient.id}>
                    <Typography>{ingredient.name}</Typography>

                    <Typography>{ingredient.quantity}</Typography>
                  </ListItem>
                ))}
              </List>

              <Divider />

              <List>
                <ListSubHeader>Cooking Instructions</ListSubHeader>
                {data?.instructions.map(instruction => (
                  <ListItem key={instruction.id}>{instruction.step}</ListItem>
                ))} 
              </List>
            </CardContent>
          </Card>
        )}
      </Container>

      <ErrorAlert
        isVisible={isError}
        onClose={handleError}
        errorMessage="Ops! Something went wrong, try again later."
      />
    </>
  );
};

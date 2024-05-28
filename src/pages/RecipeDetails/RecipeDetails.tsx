import { useNavigate, useParams } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import { useQuery } from "@tanstack/react-query";

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
  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['recipeDetails', recipeId],
    queryFn: () => getRecipeDetailsById({recipeId}),
  });

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
              image={data?.photo}
              alt={data?.name}
            />

            <CardContent sx={{ display: 'grid', gap: 2 }}>
              <Box sx={{ py: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon />

                <Typography>{`Preparation time: ${data?.prepTime} minutes`}</Typography>
              </Box>

              <List>
                <ListSubheader>Ingredients Required</ListSubheader>
                {data?.ingredients.map(ingredient => (
                  <ListItem key={ingredient.id} sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Typography>{ingredient.name}</Typography>

                    <Typography color="GrayText">{ingredient.quantity}</Typography>
                  </ListItem>
                ))}
              </List>

              <Divider />

              <List>
                <ListSubheader>Cooking Instructions</ListSubheader>
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

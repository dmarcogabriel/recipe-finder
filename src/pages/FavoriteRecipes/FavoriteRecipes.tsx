import Container from '@mui/material/Container';

import { ErrorAlert } from "@app/common/components/ErrorAlert";
import { Header } from "@app/common/components/Header";
import { RecipeList } from "@app/common/components/RecipeList";
import { useFavoritedRecipes } from "@app/common/hooks/useFavoritedRecipes";


export const FavoriteRecipes = () => {
  const { data, isLoading, isError, refetch } = useFavoritedRecipes();

  const handleError = () => refetch();

  return (
    <>
      <Header title="Favorited Recipes" />

      <Container sx={{ py: 2 }}>
        <RecipeList
          isLoading={isLoading}
          recipes={data ?? []}
        />
      </Container>

      <ErrorAlert
        isVisible={isError}
        onClose={handleError}
        errorMessage="Ops! Something went wrong, try again later."
      />
    </>
  );
};
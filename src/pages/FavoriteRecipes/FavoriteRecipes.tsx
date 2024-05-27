import { Header } from "@app/common/components/Header";
import { RecipeList } from "@app/common/components/RecipeList";
import { useFavoritedRecipes } from "@app/common/hooks/useFavoritedRecipes";


export const FavoriteRecipes = () => {
  const { data } = useFavoritedRecipes();

  return (
    <>
      <Header title="Favorited Recipes" />

      <RecipeList
        recipes={data ?? []}
      />
    </>
  );
};
import { ChangeEvent,useCallback,useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Chip } from "@mui/material";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";

import { ErrorAlert } from "@app/common/components/ErrorAlert";
import { Header } from "@app/common/components/Header";
import { RecipeList } from "@app/common/components/RecipeList";
import { useFavoritedRecipes } from "@app/common/hooks/useFavoritedRecipes";
import { useRecipeList } from "@app/common/hooks/useRecipeList";
import { ISortRecipeQuery } from "@app/common/types";


export const Home = () => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<ISortRecipeQuery>();

  const { data, isLoading, isError, refetch } = useRecipeList(search, sortBy);
  useFavoritedRecipes();

  const handleSort = useCallback((sort: ISortRecipeQuery) => () => {
    setSortBy(sort);
  }, []);

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleError = () => refetch();

  const isSortSelected = (sort: ISortRecipeQuery) => sortBy === sort ? 'filled' : 'outlined';

  return (
    <>
      <Header title="Recipes Finder" />

      <Container sx={{ py: 2, display: 'grid', gap: 2 }}>
        <Box component="form">
          <TextField
            id="search-recipe"
            label="Search Recipes"
            value={search}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            sx={{
              width: {
                xs: '100%',
                md: '30%'
              }
            }}
            placeholder="e.g. garlic, broccoli, onion"
            helperText="Insert ingredients you have separated by comma."
          />
        </Box>

        <Box sx={{ p: 1, display: 'flex', gap: 1 }}>
          <Chip
            label="Name"
            onClick={handleSort('name')}
            variant={isSortSelected('name')}
          />
          <Chip
            label="Ingredients"
            onClick={handleSort('ingredientCount')}
            variant={isSortSelected('ingredientCount')}
          />
          <Chip
            label="Preparation time"
            onClick={handleSort('prepTime')}
            variant={isSortSelected('prepTime')}
          />
        </Box>

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
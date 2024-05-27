import { ChangeEvent,useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";

import { ErrorAlert } from "@app/common/components/ErrorAlert";
import { Header } from "@app/common/components/Header";
import { RecipeList } from "@app/common/components/RecipeList";
import { useFavoritedRecipes } from "@app/common/hooks/useFavoritedRecipes";
import { useRecipeList } from "@app/common/hooks/useRecipeList";


export const Home = () => {
  const [search, setSearch] = useState('');

  const { data, isLoading, isError, refetch } = useRecipeList(search);
  useFavoritedRecipes();

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleError = () => refetch();

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
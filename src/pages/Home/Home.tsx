import { ChangeEvent,useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";

import { Header } from "@app/common/components/Header";
import { RecipeList } from "@app/common/components/RecipeList";
import { useFavoritedRecipes } from "@app/common/hooks/useFavoritedRecipes";
import { useRecipeList } from "@app/common/hooks/useRecipeList";


export const Home = () => {
  const [search, setSearch] = useState('');

  const {data} = useRecipeList(search);
  useFavoritedRecipes();

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  return (
    <>
      <Header title="Recipes Finder" />

      <Container>
        <Box component="form" sx={{ py: 2 }}>
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
          />
        </Box>

        <RecipeList recipes={data ?? []} />
      </Container>
    </>
  );
};
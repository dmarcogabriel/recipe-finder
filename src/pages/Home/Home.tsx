import { ChangeEvent,useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";

import {RecipeItem} from './RecipeItem';

const MockRecipes = Array.from({ length: 5 });

export const Home = () => {
  const [search, setSearch] = useState('');

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  return (
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
      />

      <Box sx={{ display: 'grid', gap: 2 }}>
        {MockRecipes.map((_, i) =>
          <RecipeItem key={String(i)} />
        )}
      </Box>
    </Box>
  );
};
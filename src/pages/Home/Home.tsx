import { ChangeEvent,useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";
import { useQuery } from "@tanstack/react-query";

import { getRecipes } from "./recipe.service";
import {RecipeItem} from './RecipeItem';


export const Home = () => {
  const [search, setSearch] = useState('');

  const {data} = useQuery({
    queryKey: ['recipes', search],
    queryFn: () => getRecipes({ search })
  });

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
        {data?.map(recipe => 
          <RecipeItem key={recipe.id} recipe={recipe} />
        )}
      </Box>
    </Box>
  );
};
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import recipePlaceholder from '@app/common/assets/recipePlaceholder.jpg';
import { FavoriteButton } from '@app/common/components/FavoriteButton';
import { IRecipe } from "@app/common/types";



type IProps = {
  recipe: IRecipe
};
export const RecipeItem = ({ recipe }: IProps) => {
  const navigate = useNavigate();
  const [imageHasError, setImageHasError] = useState(false);

  const handleSeeDetails = () => {
    navigate(`recipes/${recipe.id}`);
  };

  const handleImageError = () => {
    setImageHasError(true);
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ position: 'relative', display: 'flex', gap: 2 }}>
          <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
            <FavoriteButton recipeId={recipe.id} />
          </Box>

          <Avatar variant="rounded"
            alt={recipe.name}
            src={imageHasError ? recipe.photo : recipePlaceholder}
            sx={{ width: 50, height: 50 }}
            onError={handleImageError}
          />

          <Typography>
            {recipe.name}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={handleSeeDetails}>
          See details
        </Button>
      </CardActions>
    </Card>
  );
};
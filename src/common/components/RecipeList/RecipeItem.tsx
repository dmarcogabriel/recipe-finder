import {useNavigate} from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { FavoriteButton } from '@app/common/components/FavoriteButton';
import { IRecipe } from "@app/common/types";


type IProps = {
  recipe: IRecipe
};
export const RecipeItem = ({ recipe }: IProps) => {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <Grid item xs={12} md={6} xl={4}>
      <Card>
        <CardContent>
          <Box sx={{ position: 'relative', display: 'flex', gap: 2 }}>
            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
              <FavoriteButton recipeId={recipe.id} />
            </Box>

            <Avatar variant="rounded"
              alt={recipe.name}
              src={recipe.photo}
              sx={{ width: 50, height: 50 }}
            />

            <Box sx={{ display: 'grid', gap: 1 }}>
              <Typography>
                {recipe.name}
              </Typography>

              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <AccessTimeIcon />

                <Typography variant='body2' color="GrayText">
                  {`${recipe.prepTime} minutes`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={handleSeeDetails}>
            See details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
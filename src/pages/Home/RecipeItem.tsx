import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { IRecipe } from "@app/common/types";


type IProps = {
  recipe: IRecipe
};
export const RecipeItem = ({recipe}: IProps) => {
  const handleSeeDetails = () => {
    // todo: navigate to recipe details
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Avatar variant="rounded"
            alt={recipe.name}
            src={recipe.photo}
            sx={{ width: 32, height: 32 }}
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
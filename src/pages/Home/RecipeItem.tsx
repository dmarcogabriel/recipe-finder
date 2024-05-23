import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export const RecipeItem = () => {
  const handleSeeDetails = () => {
    // todo: navigate to recipe details
  };

  return (
    <Card>
      <CardContent>
        <Typography>
          Recipe Name
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSeeDetails}>
          See details
        </Button>
      </CardActions>
    </Card>
  );
};
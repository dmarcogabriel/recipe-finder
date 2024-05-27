import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export const RecipeItemPlaceholder = () => (
  <Grid item xs={12} md={6} xl={4}>
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Skeleton variant='rectangular' width={50} height={50} />
         
          <Skeleton variant='text' sx={{ fontSize: '2rem' }} width="100%" />
        </Box>

        <CardActions>
          <Skeleton variant="text" width="100%" sx={{ fontSize: '1.5rem' }} />
        </CardActions>
      </CardContent>
    </Card>
  </Grid>
);
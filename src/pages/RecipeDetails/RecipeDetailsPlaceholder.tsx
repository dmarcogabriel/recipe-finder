import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Skeleton from '@mui/material/Skeleton';


export const RecipeDetailsPlaceholder = () => (
    <>
      <Card>
        <CardHeader
          title={(
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
          )}
        />
        
        <Skeleton variant="rectangular" width="100%" height={190} />

        <CardContent sx={{ display: 'grid', gap: 2 }}>
          <List>
            <ListSubheader>Ingredients Required</ListSubheader>
            {Array.from({ length: 5 }).map((_, i) => (
              <ListItem key={String(i + 1)}>
                <Skeleton variant="text" width="100%" />
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            <ListSubheader>Cooking Instructions</ListSubheader>
            {Array.from({ length: 5 }).map((_, i) => (
              <ListItem key={String(i + 1)}>
                <Skeleton variant="text" width="100%" />
              </ListItem>
            ))} 
          </List>
        </CardContent>
      </Card>
    </>
  );

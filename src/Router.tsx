import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import { FavoriteRecipes } from './pages/FavoriteRecipes';
import { Home } from './pages/Home';
import { RecipeDetails } from './pages/RecipeDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/recipes/:recipeId',
    element: <RecipeDetails />
  },
  {
    path: '/favorited',
    element: <FavoriteRecipes />
  }
]);

export const Router = () => <RouterProvider router={router} />;

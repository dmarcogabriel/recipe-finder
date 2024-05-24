import { createBrowserRouter, RouterProvider} from 'react-router-dom';

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
  }
]);

export const Router = () => <RouterProvider router={router} />;

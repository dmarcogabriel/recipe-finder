import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/recipes/:recipeId',
    element: <h1>To be implemented.</h1>
  }
]);

export const Router = () => <RouterProvider router={router} />;

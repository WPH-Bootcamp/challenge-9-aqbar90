import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import { withSuspense } from './withSuspense';

import { HomePage, FavoritesPage, MovieDetailPage, SearchPage, NotFoundPage } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: 'movie/:id',
        element: withSuspense(MovieDetailPage),
      },
      {
        path: 'favorites',
        element: withSuspense(FavoritesPage),
      },
      {
        path: 'search',
        element: withSuspense(SearchPage),
      },
    ],
  },
  {
    path: '*',
    element: withSuspense(NotFoundPage),
  },
]);

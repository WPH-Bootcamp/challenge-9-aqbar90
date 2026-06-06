import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import { withSuspense } from './withSuspense';

import { FavoritesPage, MovieDetailPage, SearchPage, NotFoundPage } from './routes';
import SearchMobile from '@/components/search/SearchMobile';
import HomePage from '@/pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
      {
        path: 'search-mobile',
        element: <SearchMobile />,
      },
    ],
  },
  {
    path: '*',
    element: withSuspense(NotFoundPage),
  },
]);

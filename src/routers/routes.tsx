import { lazy } from 'react';

export const HomePage = lazy(() => import('@/pages/HomePage'));
export const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
export const MovieDetailPage = lazy(() => import('@/pages/MovieDetailPage'));
export const SearchPage = lazy(() => import('@/pages/SearchPage'));
export const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

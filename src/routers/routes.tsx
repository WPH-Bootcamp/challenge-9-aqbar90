import { lazy } from 'react';
import HomePage from '@/pages/HomePage';

export { HomePage };

export const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
export const MovieDetailPage = lazy(() => import('@/pages/MovieDetailPage'));
export const SearchPage = lazy(() => import('@/pages/SearchPage'));
export const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

import type { Genre } from './genre';
import type { PaginatedResponse } from './api';
// TODO: Define TypeScript interfaces for Movie data
// Hint: Check TMDB API documentation for the movie object structure
// https://developer.themoviedb.org/reference/movie-details

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  original_language: string;
  adult: boolean;
}
// TODO: Add movie properties based on TMDB API response
// Examples: id, title, overview, poster_path, etc.

export type MovieResponse = PaginatedResponse<Movie>;
// TODO: Add pagination properties
// Examples: page, results, total_pages, total_results

// TODO: Add more types as needed (Genre, Video, etc.)

export interface MovieDetail extends Movie {
  genres: Genre[];
  runtime: number;
  tagline: string;
  status: string;
  budget: number;
  revenue: number;
  homepage: string;
  imdb_id: string;
}

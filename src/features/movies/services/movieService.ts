import api from '@/lib/axios';
// import { Movie, MovieResponse } from '@/types/movie';
import type { MovieResponse, MovieDetail } from '@/features/movies/types/movie';
import type { MovieCreditsResponse } from '../types/movie';
import type { MovieVideoResponse } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// TODO: Create service functions to fetch data from TMDB API
// Reference: https://developer.themoviedb.org/reference/intro/getting-started

export const movieService = {
  async getTrendingMovies(): Promise<MovieResponse> {
    const { data } = await api.get('/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    });
    return data;
  },

  async getTopRatedMovies(): Promise<MovieResponse> {
    const { data } = await api.get('/movie/top_rated', {
      params: {
        api_key: API_KEY,
      },
    });
    return data;
  },

  async getMovieDetail(movieId: number): Promise<MovieDetail> {
    const { data } = await api.get(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return data;
  },

  async searchMovies(query: string): Promise<MovieResponse> {
    const { data } = await api.get('/search/movie', {
      params: {
        api_key: API_KEY,
        query,
      },
    });

    return data;
  },

  async getNowPlayingMovies(): Promise<MovieResponse> {
    const { data } = await api.get('/movie/now_playing', {
      params: {
        api_key: API_KEY,
      },
    });

    return data;
  },

  async getMovieCredits(movieId: number): Promise<MovieCreditsResponse> {
    const { data } = await api.get(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });

    return data;
  },

  async getMovieVideos(movieId: number): Promise<MovieVideoResponse> {
    const { data } = await api.get(`/movie/${movieId}/videos`, {
      params: {
        api_key: API_KEY,
      },
    });

    return data;
  },
};
// TODO: Implement getPopularMovies function
// Endpoint: GET /movie/popular
// TODO: Implement getNowPlayingMovies function
// Endpoint: GET /movie/now_playing
// TODO: Implement getMovieDetails function
// Endpoint: GET /movie/{movie_id}
// TODO: Implement searchMovies function
// Endpoint: GET /search/movie
// TODO: Add more endpoints as needed

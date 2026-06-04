import axios from 'axios';

// TODO: Create axios instance with base configuration
// Hint: Use environment variables for API URL and API key
// Reference: https://axios-http.com/docs/instance

export const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
});

api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  };

  return config;
});

// TODO: Configure baseURL from environment variable
// TODO: Add default headers (API key, content-type)

// TODO: Add request interceptor if needed
// Hint: You can add API key to every request here

// TODO: Add response interceptor for error handling

export default api;

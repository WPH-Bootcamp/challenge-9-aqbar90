export interface ApiError {
  status_code: number;
  status_message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface ApiResponse<T> {
  data: T;
}

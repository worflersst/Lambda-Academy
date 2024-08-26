export interface AuthResponse {
  body: {
    access_token?: string;
    refresh_token?: string;
    code?: number;
    message?: string;
    status?: string;
  };
  statusCode: number;
}

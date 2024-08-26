export interface AuthResponsOrError {
  body: {
    access_token?: string;
    refresh_token?: string;
    code?: number;
    message?: string;
    status?: string;
  };
  statusCode: number;
}

export interface AuthResponse {
  body: {
    access_token: string;
    refresh_token: string;
  };
  statusCode: number;
}

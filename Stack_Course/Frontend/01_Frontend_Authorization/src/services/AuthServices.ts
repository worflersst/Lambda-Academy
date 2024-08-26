import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthServices {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/login", null, {
      params: {
        email,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static async sign_up(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>(
      "/sign_up",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

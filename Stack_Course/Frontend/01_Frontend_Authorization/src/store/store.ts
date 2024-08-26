import { makeAutoObservable } from "mobx";
import AuthServices from "../services/AuthServices";
import {
  AuthResponse,
  AuthResponsOrError,
} from "../models/response/AuthResponse";
import $api, { BASE_URL } from "../http";
import axios from "axios";

export default class Store {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthServices.login(email, password);
      const { access_token, refresh_token } = response.data.body;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      this.setAuth(true);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async sign_up(email: string, password: string) {
    try {
      const response = await AuthServices.sign_up(email, password);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async checkAuth(): Promise<void> {
    try {
      const response = await $api.get<AuthResponsOrError>(`/me`);
      if (
        response.data.statusCode === 401 &&
        response.data.body.code === 1006
      ) {
        throw new Error("Token expired");
      }
      this.setAuth(true);
      console.log(response.data);
    } catch (err) {
      console.log("Authentication failed", err);
      if (err.message === "Token expired") {
        await this.refreshToken();
        return this.checkAuth();
      }
      throw err;
    }
  }

  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) throw new Error("No refresh token available");

      const response = await axios.post<AuthResponse>(
        `${BASE_URL}/refresh`,
        null,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      const { access_token, refresh_token: newRefreshToken } =
        response.data.body;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", newRefreshToken);
      this.setAuth(true);
      console.log(response.data);
    } catch (err) {
      console.log("Failed to refresh token", err);
    }
  }
}

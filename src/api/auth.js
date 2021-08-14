import axios from "http.js";

export function login(data) {
  return axios.post("session", data);
}

export function logout() {
  return axios.delete("session");
}

export function register(data) {
  return axios.post("user", data);
}

export function getCaptcha(data) {
  return axios.post("captcha", data);
}

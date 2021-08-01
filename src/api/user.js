import axios from "http";

export function getUserInfo(userId) {
  return axios.get(`user/${userId}`);
}

export function getUserProfile(userId) {
  return axios.get(`user/${userId}/profile`);
}

export function updateUserInfo(userId, data) {
  return axios.put(`user/${userId}`, data);
}

export function updateUserProfile(userId, data) {
  return axios.put(`user/${userId}/profile`, data);
}

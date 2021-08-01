import axios from "http";

export function getGoodList(params) {
  return axios.get("good", { params });
}

export function createGood(data) {
  return axios.post("good", data);
}

export function deleteGood(goodId) {
  return axios.delete(`good/${goodId}`);
}

export function getGoodDetail(goodId) {
  return axios.get(`good/${goodId}`);
}

import axios from "http";

export function getComment(params) {
  return axios.get("comment", { params });
}

export function getSubComment(params) {
  return axios.get("subcomment", { params });
}

export function createComment(data) {
  return axios.post("comment", data);
}

export function createSubComment(data) {
  return axios.post("subcomment", data);
}

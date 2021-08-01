import axios from "http";

export function createOrder(data) {
  return axios.post("order", data);
}

export function updateOrder(orderId, data) {
  return axios.patch(`order/${orderId}`, data);
}

export function getOrder(params) {
  return axios.get("order", { params });
}

import axios from "axios";

const instance = axios.create({
  baseURL: "http://mockjs.docway.net/mock/1hIe02FY49Z/",
  timeout: 3000,
});

export default instance;

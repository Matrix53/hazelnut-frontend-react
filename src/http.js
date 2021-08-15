import axios from "axios";

const instance = axios.create({
  baseURL: "https://94cbb646-c3fb-4ac3-8bc3-b1c4b12c8c0b.mock.pstmn.io/",
  timeout: 3000,
});

export default instance;

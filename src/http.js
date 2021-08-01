import axios from "axios";

const instance = axios.create({
  baseURL: "https://ab9e0ca6-2d18-4e74-a450-c59bc2fdaed1.mock.pstmn.io/",
  timeout: 3000,
});

export default instance;

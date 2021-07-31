import axios from "axios";

const instance = axios.create({
  baseURL: "https://96316881-41cd-40ae-b943-4066733293fa.mock.pstmn.io/",
  timeout: 3000,
});

export default instance;

/** @format */

import Axios from "axios";

const axiosInstance = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export default axiosInstance;

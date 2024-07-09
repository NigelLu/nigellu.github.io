/** @format */

import Axios from "axios";

const axiosInstance = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

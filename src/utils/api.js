import axios from "axios";

const BASE_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const resCode = {
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnathorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (res) => res;

  const onFail = (err) => {
    const {res} = err;

    if (res.status === resCode.UNAUTHORIZED) {
      onUnathorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

import ModalUtils from "@/utils/ModalUtils";
import Axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const AxiosUtils = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 15000,
  headers: headers,
});

AxiosUtils.interceptors.request.use(
  (req) => {
    req.headers["Authorization"] = localStorage.getItem("Authorization");
    return req;
  },
  (error) => {
    console.log("request error");
    return Promise.reject(error);
  }
);

AxiosUtils.interceptors.response.use(
  (res) => {
    console.log(
      "\n============================ Axios LOG START ============================="
    );
    console.log(res.request.responseURL);
    console.log(res.data);
    console.log(
      "============================ Axios LOG END ===============================\n\n"
    );
    return Promise.resolve(res);
  },
  (error) => {
    console.log(
      "############################ Axios ERROR #################################"
    );
    console.log(error);
    console.log(
      "############################ Axios END   #################################"
    );

    const errMsg = error.response?.data.details;

    if (errMsg) {
      ModalUtils.openAlert({
        message: errMsg,
      });
    }

    return Promise.reject(error);
  }
);

export default AxiosUtils;

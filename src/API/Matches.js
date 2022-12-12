import { axiosInstance } from "./AxiosInstance";

const getAllMatches = async () => {
  axiosInstance.get().then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
};

export default getAllMatches;

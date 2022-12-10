import { axiosInstance } from "./AxiosInstance";

const getAllMatches = async () => {
  const URL = "matches/list";
  axiosInstance
    .get(URL)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getAllMatches;

import { axiosInstance } from "./AxiosInstance";
import { API_BASE_URL } from "../Config/Config";
// import axios from 'axios';

const getAllMatches = async () => {

//  const URL='matches/list';
  
  try{
  const response= await axiosInstance.get('https://jsonplaceholder.typicode.com/posts');
  console.log(response.data)
  return response; 
 }
  catch(error){
    console.log(error)
      return error.response;
  }
};

export default getAllMatches;

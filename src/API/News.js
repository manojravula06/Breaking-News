import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../Config/Config";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const URL=`${API_BASE_URL}`
    const getnews = async () => {
        
    //     try {
    //       axios.get(URL).then((response) =>{
    //         // console.log(response.data)
    //         setNews(response.data)
    //       });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    const response = await axios.get(URL);

   
        setNews(response)
   
    
    }
      getnews();
  }, []);

  console.log('news', news.articles[0]);
  return (
    <>
        <h4>NEWS</h4>
    {news.map((items,index)=>(
        <div key={index}>
            <ul>
<li></li>
            </ul>
        </div>
    ))}
    </>
  );
};

export default News;

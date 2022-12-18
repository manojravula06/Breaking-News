import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { HEADLINE_BASE_URL } from "../../Config/Config";
import Header from "../../component/Navbar/Navbar";

const Landingpage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getLoading = () => {
    return (
      isLoading && (
        <div>
          <CircularProgress />
        </div>
      )
    );
  };

  const getNews = async () => {
    try {
      axios.get(HEADLINE_BASE_URL).then((response) => {
        setIsLoading(false);
        console.log(response.data.articles)
        setData(response.data.articles);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
    getLoading();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Header />
          <div className="container">
          {data.map((item)=>{return (
            <>
          <div className="m-2">
            <div className="d-flex">
              <img
                src={item.urlToImage}
                alt="no img"
                style={{width:20+'rem'}}
              />
              <div className="text-start">
              <h4 className="m-2 display-6">{item.title}</h4>
              </div>
            
            </div>
          </div>
            </>
          )})}
         
        </div>
        </>
      )}

      <div>
        {/* {data.map((item)=>{return (
           <>
            <img src={item.urlToImage} alt="img missing" />
          </>
        )})} */}
      </div>
    </div>
  );
};

export default Landingpage;

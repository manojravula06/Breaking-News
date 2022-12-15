import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {CircularProgress} from '@mui/material';
import axios from "axios";
import { API_BASE_URL } from "../../Config/Config";
import logo from '../../assets/logo.png';

const News = () => {
  const navigate=useNavigate()
  const [news, setNews] = useState([]);
  const [loading,setLoading]= useState(true);

  const getLoading=()=>{
    return loading &&<div className="d-flex justify-content-center">
     <CircularProgress/>
    </div>
  }

  const getNews = async () => {
    axios.get(API_BASE_URL).then((response) => {
      setLoading(false);
      setNews(response.data.articles);
    });
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>{getLoading()}
    {
      !loading &&
      ( 
        <>
        <img src={logo} className='m-2' style={{width:'15rem'}} alt="logo here"/>
        <div className='lg-text-center d-flex flex-wrap'>
        {news.map((post) => {
          return (
              <div className="card m-2" style={{ width: "20rem" }} key={post.title}>
                <img
                  src={post.urlToImage}
                  className="card-img-top"
                  alt="NO img"
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.publishedAt}</p>
                 <div>
                 <button className="btn btn-dark"
                 onClick={()=>navigate(`${post.url}`)}>Read more</button>
                 </div>
                </div>
              </div>
          );
        })}
      </div>
        </>

      )
    }
        
    </>
  );
};

export default News;

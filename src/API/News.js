import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../Config/Config";
import axios from "axios";
import logo from '../logo.png';

const News = () => {
  const [news, setNews] = useState([]);
  const getNews = async () => {
    axios.get(API_BASE_URL).then((response) => {
      setNews(response.data.articles);
    });
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
        <img src={logo} className='m-2' style={{width:'15rem'}} alt="logo here"/>
      <div className="d-flex flex-wrap">
        {news.map((post) => {
          return (
              <div className="card md-justify-content-center m-2" style={{ width: "20rem" }} key={post.title}>
                <img
                  src={post.urlToImage}
                  className="card-img-top"
                  alt="NO img"
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.publishedAt}</p>
                 <div>
                 <button className="btn btn-dark">Read more</button>
                 </div>
                </div>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default News;

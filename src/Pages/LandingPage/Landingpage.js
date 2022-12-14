import React, { useState, useEffect } from "react";
import Header from "../Navbar/Navbar";
import axios from "axios";

const Landingpage = () => {
  const [post, setPost] = useState([]);
  const Post = async () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{ 
      console.log(response.data)
      setPost(response.data)})
  }

  useEffect(() => {
    Post();
  }, []);

  return (
    <div>
      <Header />
      {post.map((post) => {
        return <div className="bg-success m-2 text-light">{post.title}</div>;
      })}
      {/* <div className="bg-success m-2 text-light">International</div>
      <div className="bg-success m-2 text-light">League</div>
      <div className="bg-success m-2 text-light">Domestic</div>
      <div className="bg-success m-2 text-light">Women</div> */}
    </div>
  );
};

export default Landingpage;

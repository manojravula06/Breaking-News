import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import {HEADLINES_URL} from '../../Config/Config';
import Header from "../../component/Navbar/Navbar";

const Landingpage = () => {
  const [isLoading,setIsLoading]= useState(true)
  // const getLoading=()=>{
  //   return isLoading &&<div>
  //    <CircularProgress/>
  //   </div>
  // }
  const Breaking = () => {
    try {
      axios.get(HEADLINES_URL)
      .then((response)=>{
      console.log(response)
      setIsLoading(false);
    })
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    Breaking();
  }, []);
  return (
    <div>
    {
      isLoading?<div>
        <CircularProgress/>
      </div>:  (
        <>
     <Header/>
        </>
      )
    }
    </div>
  );
};

export default Landingpage;

import React,{useEffect} from "react";
import Header from "../Navbar/Navbar";
import getAllMatches from '../../API/Matches';
// import Data from "../../API/Data";

const Landingpage = () => {


useEffect(()=>{
getAllMatches()
// Data()
},[])
 
  return (
    <div>
      <Header />
    </div>
  );
};

export default Landingpage;

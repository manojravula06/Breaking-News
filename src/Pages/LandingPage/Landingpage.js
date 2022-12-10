import React,{useEffect} from 'react'
import Header from '../Navbar/Navbar';
import getAllMatches from '../../API/Matches';

const Landingpage = () => {


useEffect(()=>{
getAllMatches()
},[])
 
return (
    <div>
        <Header/>

    </div>
  )
}

export default Landingpage
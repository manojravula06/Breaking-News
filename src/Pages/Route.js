import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landingpage from "./LandingPage/Landingpage";
import Test from "./Test";

const AppRoutes=()=> {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Landingpage/>} />
                <Route exact path='/test' element={<Test/>}/>
            </Routes>
        </Router>
  )
}

export default AppRoutes;
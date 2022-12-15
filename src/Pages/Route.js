import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landingpage from "./LandingPage/Landingpage";
import Test from "./Test";
import News from "../Pages/News/News";

const AppRoutes=()=> {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Landingpage/>} />
                <Route exact path='/test' element={<Test/>}/>
                <Route exact path="/news" element={<News/>}/>
            </Routes>
        </Router>
  )
}

export default AppRoutes;
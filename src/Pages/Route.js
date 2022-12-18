import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landingpage from "./LandingPage/Landingpage";
import Test from "./Test";
import International from "../Pages/News/News";
import Notfound from "./404/Notfound";
import Practice from "./practice";

const AppRoutes=()=> {
  return (
        <Router>
            <Routes>
              <Route exact path="/practice" element={<Practice/>}/>
                <Route exact path='/' element={<Landingpage/>} />
                <Route exact path='/test' element={<Test/>}/>
                <Route exact path="/international" element={<International/>}/>
                <Route path="/*" element={<Notfound/>}/>
            </Routes>
        </Router>
  )
}

export default AppRoutes;
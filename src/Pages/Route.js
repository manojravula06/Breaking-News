import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landingpage from "./LandingPage/Landingpage";

const AppRoutes=()=> {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Landingpage/>} />
            </Routes>
        </Router>
  )
}

export default AppRoutes;
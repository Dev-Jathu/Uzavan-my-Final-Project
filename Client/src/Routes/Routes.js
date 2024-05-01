import { Route, Routes } from "react-router-dom";
import HomePage from '../Pages/Home/Home'
import AboutPage from '../Pages/About/About'
import Service from '../Pages/Service/Service'
import Contact from '../Pages/Contact/Contact'
import Signin from '../Pages/Signin/Signin'
import Signup from '../Pages/Signup/Signupfarmer/Signup'
import Signupmachine from '../Pages/Signup/Signupmacin/Signupmachine'
import Admin from '../Pages/Admin/Admin'
import WhoYou from '../Pages/who/Who'
import Tractor from '../Pages/Service/Tractor/tractor'
import Harvestor from "../Pages/Service/Harvestor/Harvestor";
import Tsunami from '../Pages/Service/Tsunami/Tsunami'
export default function RoutesTable() {
    return (
        <div className="routesTable">
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/Signin' element={<Signin/>}/>
                <Route path='/Signupfarmer' element={<Signup/>}/>
                <Route path='/Signupmachin' element={<Signupmachine/>}/>
                <Route path='/Admin' element={<Admin/>}/>
                <Route path='/join' element={<WhoYou/>}/>
                <Route path='/Learnmore' element={<Tractor/>}/>
                <Route path='/Harvester' element={<Harvestor/>}/>
                <Route path='/Tsunami' element={<Tsunami/>}/>
                
                
            </Routes>
        </div>
    );
}

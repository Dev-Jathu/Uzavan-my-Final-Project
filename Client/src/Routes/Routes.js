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
import View from '../Pages/Service/Tractor/view/view'
import Farmer from '../Pages/Userpage/Farmer/farmer'
import Machine from "../Pages/Userpage/Machineowner/Machine";
import FarmerDetails from "../Pages/Admin/Farmer/Farmer";
import MachineryDetails from "../Pages/Admin/Machinery/Machinery";
import Profile from "../Componets/Addprofileui.js/profile";
import ProfileView from "../Pages/Userpage/Profile/profile.view";

export default function RoutesTable() {
    return (
        <div className="routesTable">
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/service' element={<Service/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/Signin' element={<Signin/>}/>
                <Route path='/Signupfarmer' element={<Signup/>}/>
                <Route path='/Signupmachin' element={<Signupmachine/>}/>
                <Route path='/Admin' element={<Admin/>}/>
                <Route path='/join' element={<WhoYou/>}/>
                <Route path='/machinepage' element={<Machine/>}/>
                <Route path='/Learnmore' element={<Tractor/>}/>
                <Route path='/Harvester' element={<Harvestor/>}/>
                <Route path='/Tsunami' element={<Tsunami/>}/>
                <Route path='/view' element={<View/>}/>
                <Route path='/home' element={<Farmer/>}/>
                <Route path='/FarmerDetails' element={<FarmerDetails/>}/>
                <Route path='/MachineryDetails' element={<MachineryDetails/>}/>
                <Route path='/Machine' element={<Machine/>}/>
                <Route path='/Addprofile' element={<Profile/>}/>
                <Route path='/Viewrofile' element={<ProfileView/>}/>



            </Routes>
        </div>
    );
}

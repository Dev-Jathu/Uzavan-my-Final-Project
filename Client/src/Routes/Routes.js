import { Route, Routes } from "react-router-dom";
import HomePage from '../Pages/Home/Home'
import AboutPage from '../Pages/About/About'
import Service from '../Pages/Service/Service'
import Contact from '../Pages/Contact/Contact'
import Signin from '../Pages/Signin/Signin'
import Signup from '../Pages/Signup/Signup'
import Admin from '../Pages/Admin/Admin'
import WhoYou from '../Pages/selection/Who'

export default function RoutesTable() {
    return (
        <div className="routesTable">
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/About' element={<AboutPage/>}/>
                <Route path='/Service' element={<Service/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Signin' element={<Signin/>}/>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='/Admin' element={<Admin/>}/>
                <Route path='/Select' element={<WhoYou/>}/>
            </Routes>
        </div>
    );
}

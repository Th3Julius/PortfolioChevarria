import { Route,Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About"


function AppRoutes() {
    return ( 
        <Routes>
            <Route element={<MainLayout/>} >
                <Route index path="/" element={<Home/>} />
                <Route index path="/About" element={<About/>} />
            </Route>
        </Routes>
     );
}

export default AppRoutes;
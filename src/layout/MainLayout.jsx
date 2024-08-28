import Nav from "../components/Nav";
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="main-layout">
             <Nav/> 
            <main>
                <Outlet/> {/* Aquí se renderizarán las rutas hijas */}
            </main>
            <Footer/> 
        </div>
      );
}

export default MainLayout;
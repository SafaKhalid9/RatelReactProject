import "../styles/variables.css"
import "../styles/layoutStyle.css"

import { Outlet } from "react-router-dom";
import Main from "./Main"
import Sidebar from "./Sidebar"
import MobileSidebar from "./MobileSidebar";
import Header from "./Header"

export default function Layout(){
    return(
        <div className="container">
            <MobileSidebar/>
            <Sidebar/>
            <div className="main-container">               
                <Header/>
                <Main>
                    <Outlet />
                </Main>
            </div>
        </div>
    )
} 
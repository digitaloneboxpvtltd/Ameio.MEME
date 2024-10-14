import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"



export default function Layout(){
    return (<>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>)
}
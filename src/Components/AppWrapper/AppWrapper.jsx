import { Header } from "../Header/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"



function AppWrapperComponent(){
 return(
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
 )
}
export { AppWrapperComponent }
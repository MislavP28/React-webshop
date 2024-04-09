import { Header } from "../Header/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"



function AppWrapperComponent(){
 return(
    <>
    <Header></Header>
    <main>
      <Outlet></Outlet>
    </main>
    <Footer></Footer>
    </>
 )
}
export { AppWrapperComponent }
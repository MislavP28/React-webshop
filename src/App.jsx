import './App.css'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { AppWrapperComponent } from './Components/AppWrapper/AppWrapper'
import { Home } from './Components/Home/Home'
import { Contact } from './Components/Contacs/Contact'
import { About } from './Components/About/About'
import { Blog } from './Components/Blog/Blog'
import { Products } from './Components/Products/Products'
import { SingleProduct } from './Components/Products/SingleProduct'



function App() {
   return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppWrapperComponent></AppWrapperComponent>}>
              <Route index element={<Home/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Blog" element={<Blog/>}/>
              <Route path="/Products" element={<Outlet/>}>
                <Route index element={<Products title={"Default"}/>}/>
                <Route path="/Products/:id" element={<SingleProduct/>}/>
              </Route>
              
          
            </Route >
        
        
        </Routes>
        </BrowserRouter>
        </>
    )


}

export default App

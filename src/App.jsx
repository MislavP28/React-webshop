import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppWrapperComponent } from './Components/AppWrapper/AppWrapper'
import { Home } from './Components/Home/Home'
import { Contact } from './Components/Contacs/Contact'
import { About } from './Components/About/About'
import { Blog } from './Components/Blog/Blog'
import { Products } from './Components/Products/Products'


function App() {
   return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppWrapperComponent></AppWrapperComponent>}>
              <Route index element={<Home/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Products" element={<Products/>}/>
              <Route path="/Blog" element={<Blog/>}/>
          
            </Route >
        
        
        </Routes>
        </BrowserRouter>
        </>
    )


}

export default App

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppWrapperComponent } from './Components/AppWrapper/AppWrapper'
import { Page } from './Components/Page/page'
import { Home } from './Components/Home/Home'
import { Product } from './Components/Product/Product'


function App() {
   return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppWrapperComponent></AppWrapperComponent>}>
              <Route index element={<Home/>}/>
              <Route path="/contact" element={<Page title={"Contanct"} description={"SomeDescription"}></Page>}></Route>
              <Route path="/about" element={<Page title={"About"} description={"SomeDescription"}></Page>}></Route>
              <Route path="/product" element={<Product/>}></Route>
            
            </Route >
        
        
        </Routes>
        </BrowserRouter>
        </>
    )


}

export default App

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppWrapperComponent } from './Components/AppWrapper/AppWrapper'
import { Page } from './Components/Page/page'

function App() {
  const [count, setCount] = useState(0)
   return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppWrapperComponent></AppWrapperComponent>}>
              <Route path="/contact" element={<Page title={"Contanct"} description={"SomeDescription"}></Page>}></Route>
              <Route path="/about" element={<Page title={"About"} description={"SomeDescription"}></Page>}></Route>
              <Route path="/product" element={<Product></Product>}></Route>
            
            </Route >
        
        
        </Routes>
        </BrowserRouter>
        </>
    )


}

export default App

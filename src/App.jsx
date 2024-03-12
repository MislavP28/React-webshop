import './App.css'
import { BrowseRouter, Route, Routes} from "react-route-dom"
import { AppWrapperComponent } from './Components/AppWrapper/AppWrapper'
import { Page } from './Components/Page/page'

function App() {
  const [count, setCount] = useState(0)
   return(
        <>
        <BrowseRouter>
        <Routes>
            <Route path="/" element={<AppWrapperComponent></AppWrapperComponent>}>
              <Route path="/contact" element={<Page title={"Contanct"} description={"SomeDescription"}></Page>}></Route>
              <Route path="/about" element={<Page title={"About"} description={"SomeDescription"}></Page>}></Route>
              <Route path="/product" element={<Product></Product>}></Route>
            
            </Route >
        
        
        </Routes>
        </BrowseRouter>
        </>
    )


}

export default App

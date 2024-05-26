import "./Product.scss"
import { Link } from "react-router-dom"
import { useFetch } from "../Hooks/UseFetch";


function Products(){
    const URL = import.meta.env.VITE_API_URL;
    const data = useFetch(URL);
    return(
        <div className="productcss">
             {data.map((data, id) => (
                <div key={id}>
                    <div>
                        <Link to={"/Products/" + data.id} onClick={() => {window.scrollTo(0,0)}}>
                        <img src={data.src} alt={data.name}/>
                    </Link>  
                    </div>
                    <div className="demodiv">
                        <h3>{data.brand} <br/> {data.name}</h3>
                        <span>{data.price} EUR</span>
                        <br/>
                        <button><i className="bi bi-minecart"></i></button>
                    </div>
                    
                </div>
                
            ))}
        </div>
          

    )
}
export { Products }
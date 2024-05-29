import { Link } from "react-router-dom";
import { useFetch } from "../Hooks/UseFetch";

function Productgen(){

    const URL = import.meta.env.VITE_API_URL;
    const data = useFetch(URL + "products");

    <div className="fitall">
        <h2>Lista Proizvoda</h2>
        <div className="options">
            {data.map((data, id) => (
                <div key={id}>
                    <h3>{data.manufacturer} <br/> {data.productName}</h3>
                    <Link to={"/product/" + data.productId} onClick={() => {window.scrollTo(0,0)}}>
                        <img src={data.thumbnailLink} alt={data.thumbnailDescription}/>
                    </Link>
                    <div>
                        
                        <br />
                        <span>{data.price} EUR</span>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
}

export { Productgen }
import "./Product.scss"
import { Link } from "react-router-dom"
import data from "../../../OpisProizvoda.json"

function Products(){
    return(
        <div className="productcss">
             {data.map((data, id) => (
                <div key={id}>
                    <div>
                        <Link to={"/product/" + data.id} onClick={() => {window.scrollTo(0,0)}}>
                        <img src={data.src} alt={data.name}/>
                    </Link>  
                    </div>
                    <div className="demodiv">
                        <h3>{data.brand} <br/> {data.name}</h3>
                        <span>{data.price} EUR</span>
                        <br/>
                        <button><i class="bi bi-minecart"></i></button>
                    </div>
                    
                </div>
                
            ))}
        </div>
          

    )
}
export { Products }
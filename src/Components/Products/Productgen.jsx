import data from "../../../OpisProizvoda.json";
import { Link } from "react-router-dom";

function Productgen(){
    <div className="fitall">
        <h2>Lista Proizvoda</h2>
        <div className="options">
            {data.map((data, id) => (
                <div key={id}>
                    <h3>{data.brand} <br/> {data.name}</h3>
                    <Link to={"/product/" + data.id} onClick={() => {window.scrollTo(0,0)}}>
                        <img src={data.src} alt={data.name}/>
                    </Link>
                    <div>
                        <button><i class="bi bi-minecart"></i></button>
                        <br />
                        <span>{data.price} EUR</span>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
}

export { Productgen }
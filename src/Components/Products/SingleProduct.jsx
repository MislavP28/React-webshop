import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/UseFetch";

function SingleProduct(){
    
    const URL = import.meta.env.VITE_API_URL;
    const data = useFetch(URL);

    let { id } = useParams();
    
    return (
        <div className="product_wrap">
            <h1>{data[id].name}</h1>
            <section className="proizvod_opis">
                <div className="proizvod_slika">
                    <img src={data[id].src} alt={data[id].name}/>
                </div>
                <div className="proizvod_tekst">
                    <h3>Opis Proizvoda:</h3>
                    <p> {data[id].description} </p>
                </div>
                <div className="kupi">
                    <p>Cijena proizvoda: <span>{data[id].price} EUR</span></p>
                </div>
                <div className="staviukosaricu">
                    <button><i className="bi bi-minecart"></i> Dodaj u košaricu</button>
                </div>
            </section>

        </div>
    )

   
}
export { SingleProduct }
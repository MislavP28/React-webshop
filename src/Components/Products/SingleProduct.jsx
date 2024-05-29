import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/UseFetch";
import "./SingleProduct.scss"

function SingleProduct(){
    let { id } = useParams();
    const URL = import.meta.env.VITE_API_URL;
    const data = useFetch(URL + "products/" + id);

    
    
    return (
        <div className="product_wrap">
            <div className="budilijevo">
                <h1>{data.imeProizvoda}</h1>
                <div className="proizvod_slika">
                    { data.slikas ? (<img src={data.slikas[0]?.link} alt={data.slikas[0]?.opis}/>) : <p>loading...</p> }
                </div>
            </div>
            
            <section className="proizvod_opis">
                <div className="proizvod_tekst">
                    <h3>Opis Proizvoda:</h3>
                    <p> {data.opis} </p>
                </div>
                <div className="kupi">
                    <p>Cijena proizvoda: <span>{data.cijena} EUR</span></p>
                </div>
                <div className="staviukosaricu">
                    <button><i className="bi bi-minecart"></i> Dodaj u košaricu</button>
                </div>
            </section>

        </div>
    )

   
}
export { SingleProduct }
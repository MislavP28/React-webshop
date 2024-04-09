import "./Product.css"


function Product(){
    return(
        <div className="productcss">
            
            <div className="ROGfalchion">
                <div>  
                    <a href=""><img src="Slike/slike proizvoda/ROG Falchion.jpg" alt="ROGfalchion"/></a>
                </div>
                
                <div className="demodiv">
                    <span><h3>Rog Falchion</h3></span>
                    <span>149,99 EUR</span>
                    <a href=""><a href=""><span><img className="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span></a></a>
                </div>
            </div>
            <div className="rx7900xtx" >
                <div>
                <img src="Slike/slike proizvoda/rx 7900 xtx.jpg" alt="rx7900xtx"/> 
                </div>
                
                <div className="demodiv">
                    <span><h3>RX 7900 XTX</h3></span>
                    <span>999,99 EUR</span>
                    <a href=""><span><img className="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span></a>
                </div>
            </div>
            <div className="rtx4090" >
                <div>
                    <img src="Slike/slike proizvoda/Rtx 4090.webp" alt="rtx4090"/>
                </div>

                <div className="demodiv">
                    <span><h3>RTX 4090</h3></span>
                    <span>1999,99 EUR</span>
                    <a href=""><span><img className="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span></a>
                </div>
            </div>
            <div className="rtx4080super" >
                <div>
                    <a href=""><img src="Slike/slike proizvoda/rtx_4080.jpg" alt="rtx4080super"/></a>
                </div>
                
                <div className="demodiv">
                    <span><h3>RTX 4080 Super</h3></span>
                    <span>999,99 EUR</span>
                    <a href=""><span><img className="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span></a>
                </div>
            </div>
            <div className="ROGchakramX" >
            <div>
                    <a href=""><img src="Slike/slike proizvoda/ROG Chakram X.jpg" alt="ChakramX"/></a>
            </div>
                
                <div className="demodiv"> 
                    <span>
                        <h3>ROG Chakram X</h3>
                    </span>
                    <span>149,99 EUR</span>
                    <a href=""><span><img className="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span></a>
                </div>
            </div>
            <div className="deepcooler">
                <div>
                <a href=""><img src="Slike/slike proizvoda/02.webp" alt="hladnjak"/></a>  
                </div>
                
                <div className="demodiv">
                    <span>
                        <h3>DeepCooler ak620</h3>
                    </span>
                    <span>79,99 EUR</span>
                    <span><img className="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span>
                </div>
            </div>
            <div className="monitor">
                <div>
                    <a href=""><img src="Slike/slike proizvoda/1692603952830.jpg" alt="Monitor"/> </a> 
                </div>
                
                <div className="demodiv">
                    <h3>Asus ROG PG34WCDM</h3>
                    <span>1299,99 EUR</span>
                    <a href=""><span><img className="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span></a>
                </div>
            </div>
            <div className="cpu">
                <div>
                    <a href=""><img src="Slike/slike proizvoda/amd-ryzen-7-7800x3d-review-4.webp" alt="cpu"/></a>
                </div>
                
                <div className="demodiv">
                    <h3>Ryzen 7 7800x3d</h3>
                    <span>459,99 EUR</span>
                    <a href=""><span><img className="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span></a>
                </div>
            </div>


        </div>
    )
}
export { Product }
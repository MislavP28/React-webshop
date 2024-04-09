import "./Footer.scss"


function Footer(){
    return(
        <div className="footercss" >
            <div className="main">
                <div className="prvi_dio">
                    <div className="links">
                        <span><strong>Sadržaj</strong></span>
                        <div className="home">
                            <a href="../index.html" target="_parent"> Naslovnica </a>
                        </div>
                        <div className="products">
                            <a href="../products.html" target="_parent"> Proizvodi </a>
                        </div>
                        <div className="about">
                            <a href="../about.html" target="_parent"> O nama</a>
                        </div>
                        <div className="contacts">
                            <a href="../contact.html" target="_parent"> Kontakt</a>
                        </div>
                    </div>
                </div>
                <div className="kontakt">
                    <span><strong>Javite nam se!</strong></span><br/>
                    <span><strong>Email:</strong> gpukriticarshop@gmail.com</span><br/>
                    <span><strong>Tel:</strong> 097 4477638</span><br/>
                    <span><strong>Adresa:</strong> Jure Jurića 44 22213 Pirovac</span><br/>
                </div>
                <div className="illegals">
                    <div>
                        <a href="../terms.html"> Uvjeti poslovanja</a>
                    </div>
                    <div>
                        <a href="../terms.html"> Uvjeti korištenja</a>
                    </div>
                    <div>
                        <a href="../privacy.html"> Pravila privatnosti</a>
                    </div>
                    <div>
                        <a href="../cookies.html">Pravila kolačića</a>
                    </div>
                </div>
                <div className="mapa">
                    <p>Gdje se nalazmo</p>
                    <iframe className="iframe_map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1307.1319229769822!2d15.680497346997296!3d43.81440550253108!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2shr!4v1705257854814!5m2!1shr!2shr" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="rights">
                    <div className="copyright">
                        <span>Autorska prava © 2024 GpuKritičarShop</span><br/>
                        <span>Sva prava su zadržana</span>
                    </div>

                </div>

            </div>
    </div>
    )
}
export { Footer }
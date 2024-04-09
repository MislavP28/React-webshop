import "./Header.scss"
import { Link } from "react-router-dom"


function Header(){
    return(
        <div className="headercss"> 
             <object>
            <div className="main">
                        
                <div className="banner">
                    <div className="Prvidioimena">
                        <p>GPU KRITIČAR</p>
                    </div>

                    <div className="banerdiv">
                        <img src="../Slike/images/giphy.gif" alt="gifbannera"/> 
                    </div>
                    
                    <div className="Drugidioimena">
                        <p>SHOP!!!!</p>
                    </div>
                </div>

                <div className="below_banner">
                    <div className="logo">
                        <div className="gpulogo">
                            <Link to={"/"}>
                                <i class="bi bi-gpu-card"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="main_menu">
                        <div className="prvi_red">
                            <div className="mail">
                                <a id="em" href="mailto:gpukriticarshop@gmail.com" target="_blank"><i class="bi bi-envelope-at"></i>  gpukriticarshop@gmail.com</a>
                            </div>

                            <div className="telefon">
                               <a href="tel:097 4477638"> <img className="icon" src="../Slike/ikone/phone.svg" alt="Broj Telefona"/>097 4477638</a>
                            </div>

                            <div className="socialmedia">
                                <div className="instagram">
                                    <a id="in" href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
                                </div>

                                <div className="facebook">
                                    <a id="fb" href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook"></i></a>
                                </div>

                                <div className="twitter">
                                    <a id="tw" href="https://twitter.com" target="_blank"><i class="bi bi-twitter-x"></i></a>
                                </div>

                                <div className="whatsapp">
                                    <a id="wp" href="https://www.whatsapp.com/gpukriticar/" target="_blank"> <i class="bi bi-whatsapp"></i></a>
                                </div>
                            </div>

                            <div className="pretraži">
                                <input id="pretraži_trg" type="text" placeholder="Pretraži trgovinu"/>
                            </div>

                            <div className="košarica">
                                <a href="../cart.html"><i class="bi bi-minecart"></i></a>
                            </div>
                        </div>

                        <div className="drugi_red">
                            <div className="onama">
                                <div className="Aboutus">
                                    <Link to={"/About"}>
                                        O nama
                                    </Link>
                                </div>
                                <div className="Kontakti">
                                    <Link to={"/Contact"}>
                                        Kontakt
                                    </Link>
                                </div>
                                <div className="blog">
                                    <Link to={"/Blog"}>
                                        Blog
                                    </Link>
                                </div>
                                <div className="Proizvodi">
                                <Link to={"/Products"}>
                                        Proizvodi
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </object>
        </div>
    )
}
export { Header }
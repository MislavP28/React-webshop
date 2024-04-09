import "./Header.css"


function Header(){
    return(
        <div>
             <object>
            <div class="main">
                        
                <div class="banner">
                    <div class="Prvidioimena">
                        <p>GPU KRITIČAR</p>
                    </div>

                    <div class="banerdiv">
                        <img src="../Slike/images/giphy.gif" alt="gifbannera"/> 
                    </div>
                    
                    <div class="Drugidioimena">
                        <p>SHOP!!!!</p>
                    </div>
                </div>

                <div class="below_banner">
                    <div class="logo">
                        <a id="gpulogo" href="../index.html" target="_parent"/> <img class="icon" src="../Slike/ikone/gpu-card(1).svg" alt="Logo"/>
                    </div>

                    <div class="main_menu">
                        <div class="prvi_red">
                            <div class="mail">
                                <a id="em" href="mailto:gpukriticarshop@gmail.com" target="_blank"><img class="icon" src="../Slike/ikone/envelope-at.svg" alt="Link za mail"/>  gpukriticarshop@gmail.com</a>
                            </div>

                            <div class="telefon">
                               <a href="tel:097 4477638"> <img class="icon" src="../Slike/ikone/phone.svg" alt="Broj Telefona"/>097 4477638</a>
                            </div>

                            <div class="socialmedia">
                                <div class="instagram">
                                    <a id="in" href="https://www.instagram.com/" target="_blank"><img class="icon" src="../Slike/ikone/instagram.svg" alt="Link za Instagram"/></a>
                                </div>

                                <div class="facebook">
                                    <a id="fb" href="https://www.facebook.com" target="_blank"><img class="icon" src="../Slike/ikone/facebook.svg" alt="Link za Facebook"/></a>
                                </div>

                                <div class="twitter">
                                    <a id="tw" href="https://twitter.com" target="_blank"><img class="icon" src="../Slike/ikone/twitter-x.svg" alt="Link za Twitter"/></a>
                                </div>

                                <div class="whatsapp">
                                    <a id="wp" href="https://www.whatsapp.com/gpukriticar/" target="_blank"> <img class="icon" src="../Slike/ikone/whatsapp.svg" alt="Link za whatsapp"/></a>
                                </div>
                            </div>

                            <div class="pretraži">
                                <input id="pretraži_trg" type="text" placeholder="Pretraži trgovinu"/>
                            </div>

                            <div class="košarica">
                                <a href="../cart.html"></a><img id="košara" class="icon" src="../Slike/ikone/minecart.svg" alt="Košarica stvari"/>
                            </div>
                        </div>

                        <div class="drugi_red">
                            <div class="onama">
                                <a href="../about.html" target="_parent">O nama</a>
                                <a href="../contact.html" target="_parent">Kontakt</a>
                                <a href="../blog.html" target="_parent">Blog</a>
                                <a href="../products.html" target="_parent">Proizvodi</a>
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
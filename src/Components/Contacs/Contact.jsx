import "./Contact.scss"


function Contact (){
    return( 
        <div className="contactcss">
            <div id="tablica1">
                <table>
                    <tr>
                        <div>
                            <td> 
                                    <form action="hvlavam.html" method="get">
                                        <label>Ime i Prezime:</label><br/>
                                        <input required="true" type="text" name="ime" placeholder="Unesite ime i prezime"/><br/>
                                        
                                        <label for="">Email:</label><br/>
                                        
                                        <input required="true" type="email" name="email" placeholder="Email"/><br/>
                                        
                                        <label for="">Vaša Poruka:</label><br/>
                                        
                                        <textarea required="true" name="" id="" cols="35" rows="15"></textarea><br/>
                                    
                                        <button type="submit">Pošalji</button>
                                        <button type="reset">Resetiraj</button>
                                    </form>
                            </td> 
                        
                        </div>
                    </tr>
                    
                </table>
            </div>
            <div id="tablica2">

                <section className="podatci"> 
                        
                    <ul>
                        <strong>Kontakt:</strong><br/>
                        <li>Email:gpukriticarshop@gmail.com</li><br/>
                        <li>OIB:4206980085</li><br/>
                        <li>Adresa:Jure Jurića 44 22213, Pirovac</li><br/>
                        <li>Mobitel:097 4477638</li>
                    </ul>

                </section>
                <section className="social_contacts"> 
                        <ul><strong>Društvene mreže:</strong> <br/>
                            <li><a id="tw" href="https://twitter.com" target="_blank"><img className="icon" src="Slike/ikone/twitter-x.svg" alt="Link za Twitter"/> @fanofkriticar</a></li>
                            <li><a id="in" href="https://www.instagram.com/" target="_blank"><img className="icon" src="Slike/ikone/instagram.svg" alt="Link za Instagram"/> GpuKritičar</a></li>
                            <li><a id="fb" href="https://www.facebook.com" target="_blank"><img className="icon" src="Slike/ikone/facebook.svg" alt="Link za facebook"/>GpuKritičar</a></li>
                            <li><a id="wp" href="https://www.whatsapp.com/gpukriticar/" target="_blank"> <img className="icon" src="Slike/ikone/whatsapp.svg" alt="Link za whatsapp"/>GpuKritičar</a></li>
                        </ul><br/>
                </section>
            </div>
            <div className="slikakriticar">
                <img src="Slike/images/Kritičar.jpg" alt="Karikatura Kritičara"/>

            </div>
        </div>
    )
}
export { Contact }
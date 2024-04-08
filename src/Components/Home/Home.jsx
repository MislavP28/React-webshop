
function Home (){
    return (
        <div>
                    <div class="main">
            <article class="popularne_kategorije">
                <div class="popkat">Popularne Kategorije</div>
                <div><a href="">Nvidia</a></div>
                <div><a href="">AMD</a></div>
                <div><a href="">Procesori</a></div>
                <div><a href="">Periferija</a></div>
            </article>
            <article class="popularni_proizvodi">
                <a href="">
                    <section>
                        <h3>Asus ROG RTX 4090</h3>
                        <img src="Slike/slike proizvoda/Rtx 4090.webp" alt="RTX 4090"/>
                        <div class="interni_proizvod">
                                    <span>1.999,99 EUR</span>
                                    <span><img class="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span>
                        </div>
                    </section>
                </a>
                <a href="">
                    <section>
                        <h3>RX 7900XTX</h3>
                        <img src="Slike/slike proizvoda/rx 7900 xtx.jpg" alt="Rx 7900xtx"/>
                        <div class="interni_proizvod">
                                    <span>999,99 EUR</span>
                                    <span><img class="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span>
                        </div>
                    </section>
                </a>
                <a href="">
                    <section>
                        <h3>ROG Falchion</h3>
                        <img src="Slike/slike proizvoda/ROG Falchion.jpg" alt="ROG Falchion"/>
                        <div class="interni_proizvod">
                                    <span>149,99 EUR</span>
                                    <span><img class="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span>
                        </div>
                    </section>
                </a>
                <a href="">
                    <section>
                        <h3>ROG Chakram X</h3>
                        <img src="Slike/slike proizvoda/ROG Chakram X.jpg" alt="ROG Chakram X"/>
                        <div class="interni_proizvod">
                                    <span>149,99 EUR</span>
                                    <span><img class="klikkup" src="Slike/ikone/minecart.svg" alt="klik za kupnju"/></span>
                        </div>
                    </section>
                </a>
            </article>
            <article class="blog" >
                <section>
                    <h2>Nove NVIDIA gpu</h2>
                    <p>
                        <img class="slika1" src="Slike/slike proizvoda/rtx_4080.jpg" alt="rtx_4080"/>
                        NVIDIA je na CES 2024 Predstavila nove varijante svojih grafičkih kartica iz 4000 serije. Nove najavljene Kartice su 4070 Super (599$), 4070 ti Super(799$) i 4080 Super(999$) koje bi se trebale naći na tržištu krajem siječnja. Sve grafičke kartice bi trebala donijeti lagano poboljšanje na svoje osnovne verzije a 4080 Super čak donosi i manju cijenu. Pratite nas pa kada se dočepamo kartica budemo postavili review i benchmark rezultate da sami možete odlučiti koju kupiti. 
                    </p>
                </section>
                <section>
                    <h2>Novi QD-OLED monitori</h2>
                    <p>
                        <img class="slika2" src="Slike/slike proizvoda/samsung-odyssey-oled-g8-g80sd.webp" alt="g8"/>
                        Tijekom prosinca Samsung je najavio nova dva monitora za gaming koji koriste QD-OLED tehnologiju veličine 32" i 27". Monitor veličine 32" dolazi u 4k rezoluciji i osvježenjem ekrana 240Hz, a monitor od 27" dolazi sa 2k rezolucijom i osvježenjem ekrana od 360Hz. 
                    </p>
                </section>

            </article>
            <article class="newsletter">
                <h2>Newsletter</h2>
                <p>
                    Pretplatite se na naš newsletter te budi među prvima koji će biti obavješten o našim novim proizvodima i blogovima.
                    <input class="nlala" type="text" placeholder="Pretplati se"/>
                    <button class="nlala" type="submit"> <img src="Slike/ikone/send-fill.svg" alt=""/></button>
                </p>
            </article>
        </div>

        </div>
    )
}
export { Home }
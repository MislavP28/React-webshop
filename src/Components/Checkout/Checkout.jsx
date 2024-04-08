
function Checkout(){
    return (
        <div class="Podatci_kupca">
        <form>
            <Label>Ime:</Label>
            <input required="true" type="text" name="Ime" placeholder="Unesite Ime:"/>
            <br/>
            <label>Prezime:</label>
            <input required="true" type="text" name="Prezime" placeholder="Unesite Prezime:"/>
            <br/>
            <label>E-mail:</label>
            <input required="true" type="email" name="email" placeholder="Unesite E-mail:"/>
            <br/>
            <label>Adresa:</label>
            <input required="true" type="text" name="Adresa" placeholder="Unesite Adresu:"/>
            <br/>
            <label>Poštanski broj:</label>
            <input required="true" type="text" name="Poštanski broj" placeholder="Unesite poštanski broj:"/>
            <br/>
            <label>Grad:</label>
            <input required="true" type="text" name="Grad" placeholder="Grad:"/>
            <br/>
            <label>Država:</label>
            <input required="true" type="text" name="Država" placeholder="Država:"/>
            <br/>
            <label>Broj Telefona:</label>
            <input required="true" type="text" name="Grad" placeholder="Unesite Broj Telefona:"/>
            <br/>
            <Button type="submit">KUPUJEM!</Button>
        </form>
       

    </div>
    )
}
export { Checkout }
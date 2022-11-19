

const Contatti = class {
    constructor(idNumTell, idNumTellrisp, idEmail, idEmailrisp, idIndirizzo, idIndirizzorisp, idBottone, idFormContatti) {
        this.idNumTell = idNumTell;
        this.idNumTellrisp = idNumTellrisp;
        this.idEmail = idEmail;
        this.idEmailrisp = idEmailrisp;
        this.idIndirizzo = idIndirizzo;
        this.idIndirizzorisp = idIndirizzorisp;
        this.idBottone = idBottone;
        this.idFormContatti = idFormContatti;
    }

    getElementByUsingId() {
        let utente = []
        let numTell = document.getElementById(this.idNumTell);
        let email = document.getElementById(this.idEmail);
        let indirizzo = document.getElementById(this.idIndirizzo);
        let formContatti = document.getElementById(this.idFormContatti);
        utente = [numTell, email, indirizzo, formContatti];
        return utente;
    }

    scritturaDati() {

        document.getElementById(this.idNumTellrisp).textContent = this.controllodatoinserito(this.getElementByUsingId()[0].value
        );

        document.getElementById(this.idEmailrisp).textContent = this.controllodatoinserito(this.controlloemail(this.getElementByUsingId()[1].value
        ));

        document.getElementById(this.idIndirizzorisp).textContent = this.controllodatoinserito(this.getElementByUsingId()[2].value
        );


    }

    controllodatoinserito(dato) {
        if (dato == "") {
            return "Dato non inserito";
        } else {

            return dato;
        }
    }

    inserisciDati() {
        const inserimentoDati = document.getElementById(this.idBottone);
        let utente = this.getElementByUsingId();

        inserimentoDati.addEventListener("click", () => { this.scritturaDati() }, false);

        inserimentoDati.addEventListener("click", () => {
            if (utente[3].style.display !== 'none') {

                utente[3].style.display = 'block';
            }
        }, { once: true }
        );
    }

    controlloemail(email) {
        if (email.includes("@")) {
            return email;
        } else {
            return "E-mail non valido"
        }

    }
}

export default Contatti
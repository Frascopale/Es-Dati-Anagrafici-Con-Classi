

const DatiPersonali = class {
    constructor(idImpiego,idImpiegorisp, idStatoCivile, idStatoCivilerisp, idBottone, idFormDatiPersonali){
        this.idImpiego=idImpiego;
        this.idImpiegorisp=idImpiegorisp;
        this.idStatoCivile=idStatoCivile;
        this.idStatoCivilerisp=idStatoCivilerisp;
        this.idBottone=idBottone;
        this.idFormDatiPersonali=idFormDatiPersonali;
    }

    getElementByUsingId() {
        let utente = []
        let impiego = document.getElementById(this.idImpiego);
        let statoCivile = document.getElementById(this.idStatoCivile);
        let formDatiPersonali = document.getElementById(this.idFormDatiPersonali);
        utente = [impiego, statoCivile, formDatiPersonali];
        return utente;
    }

    scritturaDati() {

        document.getElementById(this.idImpiegorisp).textContent = this.controllodatoinserito(this.getElementByUsingId()[0].value
        );

        document.getElementById(this.idStatoCivilerisp).textContent = this.controllodatoinserito(this.getElementByUsingId()[1].value
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
            if (utente[2].style.display !== 'none') {

                utente[2].style.display = 'block';
            }
        }, { once: true }
        );
    }


}

export default DatiPersonali;
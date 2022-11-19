

const DatiAnagrafici = class {
    constructor(idNome, idNomerisp, idCognome, idCognomerisp, idCodicef, idCodicefrisp, idData, idDatarisp, idBottone, idFormDatiAnagraficirisp) {
        this.idNome = idNome;
        this.idNomerisp = idNomerisp;
        this.idCognome = idCognome;
        this.idCognomerisp = idCognomerisp;
        this.idCodicef = idCodicef;
        this.idCodicefrisp = idCodicefrisp;
        this.idData = idData;
        this.idDatarisp = idDatarisp;
        this.idBottone = idBottone;
        this.idFormDatiAnagraficirisp = idFormDatiAnagraficirisp;

    }


    getElementByUsingId() {
        let utente = []
        let nome = document.getElementById(this.idNome);
        let cognome = document.getElementById(this.idCognome);
        let codicef = document.getElementById(this.idCodicef);
        let data = document.getElementById(this.idData);
        let formdati = document.getElementById(this.idFormDatiAnagraficirisp);
        utente = [nome, cognome, codicef, data, formdati];
        return utente;
    }

    scritturaDatiAnagrafici() {

        document.getElementById(this.idNomerisp).textContent = this.controllodatoinserito(this.getElementByUsingId()[0].value
        );
        document.getElementById(this.idCognomerisp).textContent = this.controllodatoinserito(this.getElementByUsingId()[1].value
        );
        document.getElementById(this.idCodicefrisp).textContent = this.controllodatoinserito(this.getElementByUsingId()[2].value
        );
        document.getElementById(this.idDatarisp).textContent = this.controllodatoinserito(this.convertireData((this.getElementByUsingId()[3].value
        )));
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
        inserimentoDati.addEventListener("click", () => { this.scritturaDatiAnagrafici() }, false);
        inserimentoDati.addEventListener("click", () => {
            if (utente[4].style.display !== 'none') {

                utente[4].style.display = 'block';
            }
        }, { once: true }
        );
    }

    convertireData(data) {
        let d = data.split("-");
        let dat = (d[2] + '/' + d[1] + '/' + d[0]);
        return dat;
    }

}
export default DatiAnagrafici;
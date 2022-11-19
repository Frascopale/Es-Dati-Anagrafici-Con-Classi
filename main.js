import DatiAnagrafici from "./DatiAnagrafici.js"
import Contatti from "./Contatti.js"
import DatiPersonali from "./DatiPersonali.js";

let utenteDatiAnagrafici = new DatiAnagrafici("nome", "nomerisp", "cognome", "cognomerisp", "codicef", "codicefrisp", "datanascita", "datanascitarisp", "inseriscidatianagrafici", "formdatirisp");
let utenteContatto = new Contatti("numerotell", "numerotellrisp", "email", "emailrisp", "indirizzo", "indirizzorisp", "inseriscicontatti", "formcontattirisp")
let utenteDatiPersonali = new DatiPersonali ("impiego","impiegorisp","statocivile","statocivilerisp","inseriscidatipersonali","formdatipersonalirisp")

utenteDatiAnagrafici.inserisciDati();
utenteContatto.inserisciDati();
utenteDatiPersonali.inserisciDati();
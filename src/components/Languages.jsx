// Esempio di utilizzo di un CSS Module.
//
// Importando il file ".module.css" come oggetto `styles`, possiamo
// applicare le sue regole con la sintassi `className={styles.nomeClasse}`.
// Le classi così applicate rimangono "scoped" al componente, evitando
// collisioni con altri stili globali (per esempio quelli di Bootstrap).
//
// Per combinare una classe del modulo con altre classi (globali o di
// Bootstrap) si usa un template literal, come nell'`<h1>` qui sotto.

import Btn from "./btn/btn";
import styles from "./languages.module.css";
import languages from "../data/languages.js";
import Paragraph from "./paragraph/paragraph.jsx";
import { useState } from "react";

function Languages() {

    // Stato: memorizzo l'id del linguaggio selezionato
    // null di default cosí non mostra nulla
    const [selLanguage, setSelLanguage] = useState(null);

    // Cerco in languages l'oggetto con lo stesso id
    const selectedLanguage = languages.find( language => language.id === selLanguage);

    return <>
        {/* mappo per cercare i componenti dei bottoni
        Funzione al click per aggiornare lo stato
        */}
        {languages.map(language=>{
            return <Btn 
            key={language.id} 
            buttonTitle={language.title}
            btnClicked={() => setSelLanguage(language.id)}
            open = {selLanguage === language.id}/>
        })
        } 
        
        {/* Mostro il paragrafo, altrimenti nulla */}
        {selectedLanguage ? (
            <Paragraph 
            pTitle={selectedLanguage.title} 
            pParagraph={selectedLanguage.description}/>
        ) : (null)}
        

    </>
    
}
export default Languages;

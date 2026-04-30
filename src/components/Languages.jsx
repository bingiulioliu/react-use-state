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


function Languages() {
    return <>
        {languages.map(language=>{
            return <Btn key={language.id} buttonTitle={language.title} />
        })
        } 
    </>
    ;
}
export default Languages;

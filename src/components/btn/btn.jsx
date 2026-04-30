import { useState } from "react";
import styles from "../languages.module.css";

// Props da definire nel padre (Languages)
function Btn({ buttonTitle, btnClicked, open}) {

    const btnClass = open ? 'btn-warning' : 'btn-primary';
    
    // funzione su onClick esportata al padre così comunica con l'altro figlio (paragrafo)
    return <>
        <button 
        onClick={btnClicked} 
        className={` btn ${btnClass}`}>
            {buttonTitle}
        </button>
    </>
        ;
}
export default Btn;

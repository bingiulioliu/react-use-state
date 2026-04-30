import { useState } from "react";
import styles from "../languages.module.css";

// Props da definire nel padre (Languages)
function Btn({ buttonTitle, btnClicked, open}) {

    const btnClass = open ? 'btn-warning' : 'btn-primary';
    

    return <>
        <button 
        onClick={btnClicked} 
        className={`btn ${btnClass}`}>
            {buttonTitle}
        </button>
    </>
        ;
}
export default Btn;

import { useState } from "react";
import styles from "../languages.module.css";

function Btn({
    buttonTitle = 'Titolo linguaggio',
}) {
    const [open, setOpen] = useState(true);
    const btnClass = open ? 'btn-primary' : 'btn-warning';
    const clickHandler = (event) =>{
        setOpen(!open);
    }

    return <>
        <button onClick={clickHandler} className={`btn ${btnClass}`}>{buttonTitle}</button>
    </>
    ;
}
export default Btn;
